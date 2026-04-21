module.exports = function(router) {

  var version = 'v1';

  /*****
   * Signed in
   * Design concept 1
  *****/

  router.post('/' + version + '/' + 'create/1/name-and-programme-or-project-validation', function (req, res) {

    var programmeOrProject = req.body['programmeOrProject']
    
    if (programmeOrProject == "Programme") {
      res.redirect('/' + version + '/' + 'create/1/gate-0')
    }
    else {
      res.redirect('/' + version + '/' + 'create/1/programme-type')
    }

  })

  router.post('/' + version + '/' + 'create/1/programme-type-validation', function (req, res) {

    var initiativeType = req.body['initiativeType']
    
    if (initiativeType == "Digital and data" || initiativeType == "Transformation and service delivery") {
      res.redirect('/' + version + '/' + 'create/1/digital-service')
    }
    else if (initiativeType == "Infrastructure and construction") {
      res.redirect('/' + version + '/' + 'create/1/construction')
    }
    else {
      res.redirect('/' + version + '/' + 'create/1/cross-government')
    }

  })

  router.post('/' + version + '/' + 'create/1/digital-service-agile-validation', function (req, res) {

    var agile = req.body['agile']
    
    if (agile == "Fully agile" || agile == "Blended agile") {
      res.redirect('/' + version + '/' + 'create/1/digital-service-phase')
    }
    else {
      res.redirect('/' + version + '/' + 'create/1/digital-service-cddo')
    }

  })

}