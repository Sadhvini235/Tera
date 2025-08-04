import { Request, Response } from "express";
import Website from "../models/website.model";
import Purchase from "../models/purchase.model";

export const getProducts = async (req: Request, res: Response) => {
  try {
    const websites = await Website.find({});

    if (!websites) {
      res.status(404).json({ message: "No websites found" });
      return;
    }

    const response = websites.map((item) => {
      return {
        id: item.id,
        name: item.name,
        website: item.website,
        description: item.description,
      };
    });

    res.status(200).json(response);
    return;
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
    return;
  }
};

export const createPurchase = async (req: Request, res: Response) => {
  try {
    const { item, brand, price, category,date,sustainable } = req.body;

    if (!item || !brand || !price || !category || !date || !sustainable) {
      res
        .status(400)
        .json({ message: "Item, brand, price ,category, date and sustainable are required" });
      return;
    }

    const purchase = new Purchase({
      item: item,
      brand: brand,
      price: price,
      category: category,
      date: date,
      sustainable : sustainable,
      // @ts-ignore
      userId: req.userId,
    });

    await purchase.save();

    res.status(201).json({ message: "Purchase created successfully" });
    return;
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
    return;
  }
};

export const getPurchases = async (req: Request, res: Response) => {
  try {
    const purchases = await Purchase.find({
      // @ts-ignore
      userId: req.userId,
    });

    if (!purchases) {
      res.status(404).json({ message: "No purchases found" });
      return;
    }

    res.status(200).json(purchases);
    return;
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
    return;
  }
};
