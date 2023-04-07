const { ObjectId } = require("mongodb");
const cors = require("cors");
// app.use(cors());
// ! DO NOT DELETE THE COMMENT BLOCK BELOW
/**
 * @param {import('express').Express} app - The Express instance
 * @param {import('mongodb').Db} db - The Db instance.
 */
const profilesRequestRoutes = (app, db) => {
  /**
   * Retrieves the profiles collection from Mongo db
   * @returns Collection<Document>
   */
  const profilesRequestCollection = () => db.collection("buddyfinder");

  /**
   * Middleware handler for GET requests to /api/profile path
   */
  app.get(`/api/profileRequest`, async (req, res) => {
    // Waits for asynchronous `find()` operation to complete and converts results to array
    // const filter = { religion: "Muslim" };
    const profiles = await profilesRequestCollection().find({}).toArray();

    return res.status(200).send(profiles);
  });

  /**
   * Middleware handler for POST requests to /api/profile path
   */
  app.post(`/api/profileRequest`, async (req, res) => {
    const profile = await profilesRequestCollection().insertOne(req.body);

    return res.status(201).send({
      error: false,
      profile,
    });
  });

  /**
   * Middleware handler for PUT requests to /api/profile/:id path
   */

  /**
   * Middleware handler for DELETE requests to /api/profile/:id path
   */
  app.delete(`/api/profileRequest/:id`, async (req, res) => {
    const { id } = req.params;
    const query = { _id: new ObjectId(id) };
    const profile = await profilesRequestCollection().deleteOne(query);

    return res.status(202).send({
      error: false,
      profile,
    });
  });
};

module.exports = profilesRequestRoutes;
