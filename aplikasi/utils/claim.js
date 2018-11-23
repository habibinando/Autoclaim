var backand = require('@backand/vanilla-sdk');
/**
 * @function
 * @name all
 * @description gets all created claims
 * @returns object
 */
function all() {
  return backand.object.getList("claims", {
    "pageSize": 20,
    "pageNumber": 1,
    "filter": [
      {
        "fieldName": "createdAt",
        "operator": "lessThan",
        "value": "2017-11-08T12:00:00.000Z"
      }
    ],
    "sort": []
  });
}

/**
 * @function
 * @name create
 * @description Save claim to backand 
 * @param {any} image 
 * @returns {object}
 */
function create(imageUrl) {
  //try to save first and if not add it
  return backand.object.create("claims", {
    "imageUrl": imageUrl
  }, { returnObject: true });
}

/**
 * @function
 * @name upload
 * @description Save claim to backand 
 * @param {any} filedata 
 * @returns {object}
 */
function upload(filedata) {
  var fileName = "image_" + Date.now() + ".jpg";
  return backand.file.upload("_root", "files", fileName, filedata);
}

module.exports = {
  all: all,
  create: create,
  upload: upload,
};