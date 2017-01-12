DEBUG = true;
$(document).ready(function(){
    $("#landRegSubmitFormButton").click(function(event){
        event.stopPropagation();
        var ownerName = $("#ownerName").val();
        var fhName = $("#fhName").val();
        var villageName = $("#villageName").val();
        var lcName = $("#lcName").val();
        var tName = $("#tName").val();
        var kNumNew = $("#kNumbernew").val();
        var kNumOld = $("#kNumberold").val();
        var lClassify = $("#lClassify").val();
        var tax = $("#tax").val();
        var lAddress = $("#lAddress").val();
        if(ownerName=="" || fhName=="" || villageName== "" || lcName == "" || tName=="" || kNumNew=="" || kNumOld=="" || lClassify=="" || tax=="" || lAddress==""){
            alert("Enter all details");
           }else{
               DEBUG && console.log("Submitting form");
               $("#landRegForm").submit();
           }
    });
    $("#getLandDetailsFormSubmitButton").click(function(event){
        event.stopPropagation();
        var ownerNameGd = $("#ownerNameGd").val();
        var tNameGd = $("#tNameGd").val();
        var kNumNewGd = $("#kNumbernewGd").val();
        if(ownerNameGd =="" || tNameGd=="" || kNumNewGd==""){
            alert("Enter all details");
           }else{
               DEBUG && console.log("Submitting form");
               $("#getLandDetailsForm").submit();
           }
    });  
    window.showArea = function(owner,taluk,knum,pom){
        $.ajax(pom).done(function(xml) {
            geoJsonData = toGeoJSON.kml(xml);
            coordinates = geoJsonData.features[0].geometry.coordinates[0];
            area = 0;
            for(i=0;i<coordinates.length-1;i++){
                area += (coordinates[i+1][1]-coordinates[i][1])*(2+Math.sin(ConvertToRadian(coordinates[i][0])) + Math.sin(ConvertToRadian(coordinates[i+1][0])));
            }
            area = area * 6378137 * 6378137 / 2;
            area = area/100;
            area = Math.round(area);
            console.log(Math.abs(area));
            $("#areaShower").html("Area is "+area+"m2");
        });
    }
    window.ConvertToRadian = function(input){
        return input*Math.PI/180;
    }
    window.showMap = function(input){
        if(input.files && input.files[0]){
            var file = input.files[0];
            var reader = new FileReader();
            reader.readAsText(file);
            reader.onloadend = function(e){
                var xmlData = reader.result;
                parser = new DOMParser();
                xmlDoc = parser.parseFromString(xmlData, "text/xml");
                geoJsonData = toGeoJSON.kml(xmlDoc);
                coordinates = geoJsonData.features[0].geometry.coordinates[0];
                var path="path=color:0x0000ff%7Cweight:5%7C";
                for(var i=0;i<coordinates.length;i++){
                    path += coordinates[i][1]+","+coordinates[i][0]+"%7C";
                }
                path += coordinates[0][1]+","+coordinates[0][0];
                var src = "https://maps.googleapis.com/maps/api/staticmap?size=600x300&"+path+"&key=AIzaSyAOlvVXlDnUhc97wyN8S3JaWPJw8_dD2v8";
                console.log(src);
                $("#gmap").attr('src',src);
            };
        }
    }
});