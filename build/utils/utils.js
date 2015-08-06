// Generated by CoffeeScript 1.9.3
(function() {
  var wd_;

  wd_ = {};

  wd_.isNumericId = function(id) {
    return /^[0-9]+$/.test(id);
  };

  wd_.isWikidataId = function(id) {
    return /^(Q|P)[0-9]+$/.test(id);
  };

  wd_.isWikidataEntityId = function(id) {
    return /^Q[0-9]+$/.test(id);
  };

  wd_.isWikidataPropertyId = function(id) {
    return /^P[0-9]+$/.test(id);
  };

  wd_.normalizeId = function(id, numericId, type) {
    if (type == null) {
      type = 'Q';
    }
    if (wd_.isNumericId(id)) {
      if (numericId) {
        return id;
      } else {
        return "" + type + id;
      }
    } else if (wd_.isWikidataId(id)) {
      if (numericId) {
        return id.slice(1);
      } else {
        return id;
      }
    } else {
      throw new Error('invalid id');
    }
  };

  wd_.normalizeIds = function(ids, numericId, type) {
    if (type == null) {
      type = 'Q';
    }
    return ids.map(function(id) {
      return wd_.normalizeId(id, numericId, type);
    });
  };

  wd_.wikidataTimeToDateObject = function(wikidataTime) {
    var date, rest, sign;
    sign = wikidataTime[0];
    rest = wikidataTime.slice(1);
    if (sign === '-') {
      date = "-00" + rest;
      return new Date(date);
    } else {
      return new Date(rest);
    }
  };

  wd_.wikidataTimeToEpochTime = function(wikidataTime) {
    return wd_.wikidataTimeToDateObject(wikidataTime).getTime();
  };

  wd_.wikidataTimeToISOString = function(wikidataTime) {
    return wd_.wikidataTimeToDateObject(wikidataTime).toISOString();
  };

  wd_.normalizeWikidataTime = wd_.wikidataTimeToEpochTime;

  module.exports = wd_;

}).call(this);
