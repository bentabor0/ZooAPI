import mongoose from "mongoose";
import { ZooSchema } from '../models/crmModel';

const Zoo = mongoose.model('Zoo', ZooSchema);

export const addNewZoo = (req, res) => {
    let newZoo = new Zoo(req.body);

    newZoo.save((err, zoo) => {
        if (err) {
            res.send(err);
        }
        res.json(zoo);
    });
}

export const getZoos = (req, res) => {
    Zoo.find({}, (err, zoo) => {
        if (err) {
            res.send(err);
        }
        res.json(zoo);
    });
}

export const getZooWithID = (req, res) => {
    Zoo.findById(req.params.zooID, (err, zoo) => {
        if (err) {
            res.send(err);
        }
        res.json(zoo);
    });
}

export const updateZoo = (req, res) => {
    Zoo.findOneAndUpdate({ _id: req.params.zooID }, req.body, { new: true, useFindAndModify: false }, (err, zoo) => {
        if (err) {
            res.send(err);
        }
        res.json(zoo);
    });
}

export const deleteZoo = (req, res) => {
    Zoo.remove({ _id: req.params.zooID }, (err, zoo) => {
        if (err) {
            res.send(err);
        }
        res.json({message: 'successfully deleted zoo'});
    });
}

