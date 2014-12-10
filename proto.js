/**
 * Created by Kadir on 14.11.2014.
 */

var removableAttributes = [
    "license_title",
    "id",
    "relationships",
    "license",
    "state",
    "version",
    "tags",
    "tracking_summary",
    "isopen",
    "ratings_average",
    "ratings_count",
    "revision_id",
]

var removeResourceAttributes = [
    "resource_group_id",
    "cache_last_updated",
    "package_id",
    "webstore_last_updated",
    "id",
    "size",
    "last_modified",
    "hash",
    "description",
    "tracking_summary",
    "mimetype_inner",
    "mimetype",
    "cache_url",
    "webstore_url",
    "position",
    "resource_type"
]
$.getJSON("data.json", function(data){
    data.forEach(function(dataset)
    {
        removableAttributes.forEach(function(attr) {
            eval("delete dataset." + attr);
        });
        dataset.resources.forEach(function(resource)
        {
            removeResourceAttributes.forEach(function(attr) {
                eval("delete resource." + attr);
            });
        });

    });
    var stringJson = JSON.stringify(data);
    $("#result").val(stringJson);
    alert("done");
});