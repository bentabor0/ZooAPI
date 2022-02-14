import { 
    addNewZoo,
    getZoos,
    getZooWithID,
    updateZoo,
    deleteZoo
 } from '../controllers/crmController'

const routes = (app) => {
    app.route('/zoo')

        // Get all zoos 
        .get((req, res, next) => {
            //middleware
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next();
        }, getZoos)

        // Post enpoint
        .post((req, res, next) => {
            //middleware
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next();
        }, addNewZoo);

    app.route('/zoo/:zooID')

        // Get a specific zoo by id
        .get((req, res, next) => {
            //middleware
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next();
        }, getZooWithID)
        
        // Update a specific zoo
        .put((req, res, next) => {
            //middleware
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next();
        }, updateZoo)

        // Delete specific zoo
        .delete((req, res, next) => {
            //middleware
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next();
        }, deleteZoo)
}

export default routes;