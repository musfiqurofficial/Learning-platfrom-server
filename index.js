const express = require('express')
const app = express();
const cors = require('cors')
const prot = process.env.PORT || 5000;

app.use(cors());

const courses = require('./data/course.json')

app.get('/', (req, res) => {
    res.send('courses')
})

app.get('/courses', (req, res) => {
    res.send(courses)
})

app.get("/courses/:id", (req, res) => {
    const id = req.params.id;
    const singleCourses = courses.find(n => n._id === id)
    res.send(singleCourses)
})

app.get("/courses/cs/:id", (req, res) => {
    const id = req.params.id;
    const singleCourses = courses.find(n => n._id === id)
    res.send(singleCourses)
})

app.listen(prot, () => {
    console.log("Over All News");
})