import express from "express";
import { urlModel } from "../model/shortUrl.js";

export const createUrl = async (req: express.Request, res: express.Response) => {
    try {
        console.log("The fullUrl is: ", req.body.fullUrl);
        const fullUrl = req.body.fullUrl;
        const urlFound = await urlModel.find({ fullUrl });
        if (urlFound.length > 0) {
            res.status(409);
            res.send(urlFound);
        } else {
            const shortUrl = await urlModel.create({ fullUrl });
            res.status(201).send(shortUrl);
        }
    } catch (error) {
        res.status(500).send({ message: "Server Error", error });
    }
};

export const getAllUrl = async (req: express.Request, res: express.Response) => {
    try {
        const shortUrls = await urlModel.find().sort({ createdAt: -1});
        if (shortUrls.length < 0) {
            res.status(404).send({ message: "No URLs found" });
        } else {
            res.status(200).send(shortUrls);
        }

    } catch (error) {
        res.status(500).send({ message: "Server Error", error });
    }
};
export const getUrl = async (req: express.Request, res: express.Response) => {
    try {
        // const shortUrl = await urlModel.findOne({ shortUrl: req.params.id });
        const shortUrl = await urlModel.findOne({ shortUrl: req.params.id as string });
        if (!shortUrl) {
             res.status(404).send({ message: "URL not found" });
        } else {
            shortUrl.clicks++;
            shortUrl.save();
            res.redirect(`${shortUrl.fullUrl}`);
        }
    } catch (error) {
        res.status(500).send({ message: "Server Error", error });
    }
};
export const deleteUrl = async (req: express.Request, res: express.Response) => {
        try {
        const shortUrl = await urlModel.findByIdAndDelete( {_id: req.params.id});
        if (shortUrl) {
            res.status(200).send({ message: "Requested URL deleted successfully" });
        } 
    } catch (error) {
        res.status(500).send({ message: "Server Error", error });
    }

 };


// import { Request, Response } from "express";
// import { urlModel } from "../model/shortUrl.js";

// export const createUrl = async (req: Request, res: Response) => {
//   try {
//     const fullUrl = req.body.fullUrl as string;

//     if (!fullUrl) {
//       return res.status(400).send({ message: "fullUrl is required" });
//     }

//     const urlFound = await urlModel.findOne({ fullUrl });

//     if (urlFound) {
//       return res.status(409).send(urlFound);
//     }

//     const shortUrl = await urlModel.create({ fullUrl });
//     return res.status(201).send(shortUrl);

//   } catch (error) {
//     return res.status(500).send({ message: "Server Error", error });
//   }
// };

// export const getAllUrl = async (_req: Request, res: Response) => {
//   try {
//     const shortUrls = await urlModel.find().sort({ createdAt: -1 });

//     if (shortUrls.length === 0) {
//       return res.status(404).send({ message: "No URLs found" });
//     }

//     return res.status(200).send(shortUrls);

//   } catch (error) {
//     return res.status(500).send({ message: "Server Error", error });
//   }
// };

// export const getUrl = async (req: Request, res: Response) => {
//   try {
//     const shortUrl = await urlModel.findOne({ shortUrl: req.params.id });

//     if (!shortUrl) {
//       return res.status(404).send({ message: "URL not found" });
//     }

//     shortUrl.clicks += 1;
//     await shortUrl.save();

//     return res.redirect(shortUrl.fullUrl);

//   } catch (error) {
//     return res.status(500).send({ message: "Server Error", error });
//   }
// };

// export const deleteUrl = async (req: Request, res: Response) => {
//   try {
//     const deletedUrl = await urlModel.findByIdAndDelete(req.params.id);

//     if (!deletedUrl) {
//       return res.status(404).send({ message: "URL not found" });
//     }

//     return res.status(200).send({ message: "Requested URL deleted successfully" });

//   } catch (error) {
//     return res.status(500).send({ message: "Server Error", error });
//   }
// };
