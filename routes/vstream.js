var express = require('express');
var body=require('body-parser')
const uuidv1=require('uuid/v1')
var apis=require('../services/data');
var repo=require('../app/Repository')
var router = express.Router();
var showResponse=require('../app/model/response/shows.response.model.js');
//movies
router.get('/movies/:limit', function(req, res, next){
  repo.vstream.showsRepo.prototype.getLimit(req.params.limit, function(shows){
    res.send(shows);
  }, function(err){
    res.send(err);
  })
})
router.get('/movies/:title/:limit', function(req, res, next){
  repo.vstream.showsRepo.prototype.getByTitle(req.params.title, req.params.limit, function(shows){
    res.send(shows);
  }, function(err){
    res.send(err);
  })
})
router.get('/movie/detail/:id', function(req, res, next){
  repo.vstream.showsRepo.prototype.getByID(req.params.id, function(show){
    res.send(show);
  }, function(err){
    res.send(err);
  })
})
router.post('/movies', function(req, res, next){
  repo.vstream.showsRepo.prototype.insert(req.body.name, req.body.description, req.body.storeLogo, req.body.category_id, function(resp){
    //returns the movieID
    res.send(resp.id);
  }, function(err){
      res.send(err);
  })
})
//genre
router.get('/genre/:limit', function(req, res, next){
  repo.vstream.genre.prototype.getAll(req.params.limit, function(resp){
    res.send(resp);
  }, function(err){
    res.send(err);
  })
})
router.get('/genre/:id', function(req, res, next){
  repo.vstream.genre.prototype.getByID(req.body.id, function(resp){
    res.send(resp);
  }, function(err){
    res.send(err);
  })
})
router.post('/genre', function(req, res, next){
  repo.vstream.genre.prototype.insert(req.body.title, req.body.description, function(resp){
      //returns id of genre
      res.send(resp.id);
  }, function(err){
    res.send(err);
  })
})
//videoURL
router.get('/show/video/:limit', function(req, res, next){
  repo.vstream.genre.prototype.getAll(req.params.limit, function(resp){
    res.send(resp);
  }, function(err){
    res.send(err);
  })
})
router.get('/show/video/:id', function(req, res, next){
  repo.vstream.genre.prototype.getByID(req.params.id, function(resp){
    res.send(resp);
  }, function(err){
    res.send(err);
  })
})
router.get('/show/video/list/:id', function(req, res, next){
  repo.vstream.videoURL.prototype.getByShowID(req.params.id, function(resp){
    res.send(resp);
  }, function(err){
    res.send(err);
  })
})
//showGenre
router.get('/show/genre/:id', function(req, res, next){
  repo.vstream.showGenre.prototype.getShowID(req.params.id, function(resp){
    res.send(resp);
  }, function(err){
    res.send(err);
  })
})
router.post('/show/genre', function(req, res, next){
    repo.vstream.showGenre.prototype.insert(req.body.show_id, req.body.genre_id, function(resp){
      res.send(resp);
    }, function(err){
      res.send(err);
    })
})

//Discussion
router.get('/show/discussions/all/:limit', function(req, res, next){
  repo.vstream.discussions.getAll(req.params.body, function(result){
      res.send(result);
  }, function(err){
      res.send(err);
  })
})
router.get('/show/discussions/:showid', function(req, res, next){
  //check header if the request of this resource is valid
  repo.vstream.discussions.getShowID(req.params.showid, function(result){
      res.send(result);
  }, function(err){
      res.send(err);
  })
})
router.post('/show/discussions/insert', function(req, res, next){
  repo.vstream.discussion.insert(req.body.title, req.body.description, req.body.showID, req.body.createdByUserID, req.body.createdAt, req.body.updatedAt,
    function(result){
      res.send(result)
    }, function(error){
      res.send(error);
    })
})
//discussionreplies
router.get('/show/discussions/replies/all/:limit', function(req, res, next){
  repo.vstream.discussionReplies.getAll(req.params.limit, function(result){
    res.send(result);
  }, function(error){
    res.send(error);
  })
})
router.get('/show/discussions/replies/:id', function(req, res, next){
  repo.vstream.discussionReplies.getByID(req.params.id, function(result){
    res.send(result);
  }, function(error){
    res.send(error);
  })
})
router.post('/show/discussions/replies/insert', function(req, res, next){

})

//


module.exports = router;
