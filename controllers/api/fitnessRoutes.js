const {workouts} = require ('../../models/Workout')

const router = require('express').Router();

router.get ('/search', async (request,response) => {
    const searchterm = request.query.category
    console.log(request.query)

    try {
      const data = await workouts.findAll ({
        where: {
            category: searchterm
        }
      })  
      console.log(data);
      response.json (data);
    } catch (error) {
       console.log(error);
       response.status (500) .json({error: 'internal error'})
    }
})

router.post ('/create', async (request,response) => {
    const newWorkout = request.body
    console.log(newWorkout)

    try {
      const data = await workouts.create (
        newWorkout
      )  
      console.log(data);
      response.json (data);
    } catch (error) {
       console.log(error);
       response.status (500) .json({error: 'internal error'})
    }
})


module.exports = router