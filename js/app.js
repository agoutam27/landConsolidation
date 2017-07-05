DEBUG = true;
$(document).ready(function(){
    $("#landRegSubmitFormButton").click(function(event){
        event.stopPropagation();
        var ownerName = $("#ownerName").val();
        var fhName = $("#fhName").val();
        var stateName = $("#stateName").val();
        var districtName = $("#districtName").val();
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
    
    window.displayAllCanvas = function(){
        $("#allMapsCanvas").css("background-color","#32CD32");
        var allMapsCanvas = document.getElementById("allMapsCanvas");
        var allMapsCanvasContext = allMapsCanvas.getContext('2d');
        var canvasMapCoordinates = [
//            {
//                name: "Test",
//                moveTo: [0,0],
//                coordinates: [{x:300,y:150}]
//            },
            {
                name: "Farm1",
                moveTo: [260,70],
                coordinates: [{x:260,y:180},{x:260,y:230},{x:390,y:200},{x:390,y:150},{x:350,y:150},{x:350,y:170},{x:260,y:70}]
            },
            {
                name: "Farm2",
                moveTo: [190,180],
                coordinates: [{x:190,y:70},{x:240,y:70},{x:260,y:70},{x:260,y:180},{x:225,y:180},{x:190,y:180}]
            },
            {
                name: "Farm3",
                moveTo: [190,180],
                coordinates: [{x:190,y:220},{x:190,y:300},{x:225,y:300},{x:260,y:230},{x:260,y:180},{x:225,y:180},{x:190,y:180}]
            },
            {
                name: "Farm4",
                moveTo: [390,150],
                coordinates: [{x:390,y:200},{x:390,y:220},{x:530,y:230},{x:530,y:160},{x:420,y:150},{x:390,y:150}]
            },
            {
                name: "Farm5",
                moveTo: [390,220],
                coordinates: [{x:390,y:300},{x:580,y:300},{x:580,y:230},{x:530,y:220},{x:390,y:220}]
            },
            {
                name: "Farm6",
                moveTo: [530,160],
                coordinates: [{x:530,y:220},{x:580,y:230},{x:580,y:300},{x:600,y:290},{x:600,y:150},{x:530,y:160}]
            }


        ];
        allMapsCanvasContext.beginPath();
        for(cIndex = 0;cIndex < 3; cIndex++){
            
            allMapsCanvasContext.moveTo(canvasMapCoordinates[cIndex].moveTo[0]/2,canvasMapCoordinates[cIndex].moveTo[1]/2);
            for(i = 0;i < canvasMapCoordinates[cIndex].coordinates.length;i++){
                allMapsCanvasContext.lineTo(canvasMapCoordinates[cIndex].coordinates[i].x/2,canvasMapCoordinates[cIndex].coordinates[i].y/2);                               
            }
        }
        allMapsCanvasContext.stroke();
        
    }
    window.loadCanvasMap = function(geoJsonData){
        var properties = geoJsonData.features[0].properties;
        console.log(properties);
        console.log(geoJsonData);
        $("#mapCanvas").css('background-color','#32CD32');
        var mapCanvas = document.getElementById("mapCanvas");
        var mapCanvasContext = mapCanvas.getContext('2d');
        canvasWidth = $("#mapCanvas").width();
        canvasHeight = $("#mapCanvas").height();
        console.log(canvasWidth,canvasHeight);
        mapCanvasContext.beginPath();
        var canvasMapCoordinates = [
//            {
//                name: "Test",
//                moveTo: [0,0],
//                coordinates: [{x:300,y:150}]
//            },
            {
                name: "Farm1",
                moveTo: [260,70],
                coordinates: [{x:260,y:180},{x:260,y:230},{x:390,y:200},{x:390,y:150},{x:350,y:150},{x:350,y:170},{x:260,y:70}]
            },
            {
                name: "Farm2",
                moveTo: [190,180],
                coordinates: [{x:190,y:70},{x:240,y:70},{x:260,y:70},{x:260,y:180},{x:225,y:180},{x:190,y:180}]
            },
            {
                name: "Farm3",
                moveTo: [190,180],
                coordinates: [{x:190,y:220},{x:190,y:300},{x:225,y:300},{x:260,y:230},{x:260,y:180},{x:225,y:180},{x:190,y:180}]
            },
            {
                name: "Farm4",
                moveTo: [390,150],
                coordinates: [{x:390,y:200},{x:390,y:220},{x:530,y:230},{x:530,y:160},{x:420,y:150},{x:390,y:150}]
            },
            {
                name: "Farm5",
                moveTo: [390,220],
                coordinates: [{x:390,y:300},{x:580,y:300},{x:580,y:230},{x:530,y:220},{x:390,y:220}]
            },
            {
                name: "Farm6",
                moveTo: [530,160],
                coordinates: [{x:530,y:220},{x:580,y:230},{x:580,y:300},{x:600,y:290},{x:600,y:150},{x:530,y:160}]
            }


        ];
        cIndex = 5;
        mapCanvasContext.moveTo(canvasMapCoordinates[cIndex].moveTo[0]/2,canvasMapCoordinates[cIndex].moveTo[1]/2);
        for(i = 0;i < canvasMapCoordinates[cIndex].coordinates.length;i++){
            mapCanvasContext.lineTo(canvasMapCoordinates[cIndex].coordinates[i].x/2,canvasMapCoordinates[cIndex].coordinates[i].y/2);                               
        }
        mapCanvasContext.stroke();
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
                loadCanvasMap(geoJsonData);
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
    var searchDiv = 1;
    window.toggleSearch = function(){
        if(searchDiv == 1){
            $("#search1").hide();
            $("#search2").show();
            searchDiv = 2;
        }else{
            $("#search2").hide();
            $("#search1").show();
            searchDiv = 1;
        }
    }
    window.loadStates = function(){
        var handles = ["SELECT STATE","Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Dadra and Nagar Haveli","Daman and Diu","Delhi","Goa","Gujarat","Haryana","Himachal Pradesh","Jammu and Kashmir","Jharkhand","Karnataka",
                                            "Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Orissa","Puducherry","Punjab", "Rajasthan","Sikkim","Tamil Nadu",
                                            "Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal"];
        setTimeout(function(){
            var options = '';
            for (var i = 0; i < handles.length; i++) {
                  options += '<option value="' + handles[i] + '">' + handles[i] + '</option>';
            }
            $('#stateName').html(options);
        },10);  
    }
    window.loadStates();
    window.loadDistrict = function(input,x){
        var state = input.value;
        if(state=='SELECT STATE') {
       var options = '';
      $('#districtName').html(options);
      }
     if(state=='Andhra Pradesh') {
       var andhra = ["Anantapur","Chittoor","East Godavari","Guntur","Krishna","Kurnool","Prakasam","Srikakulam","SriPotti Sri Ramulu Nellore",
                                        "Vishakhapatnam","Vizianagaram","West Godavari","Cudappah"];
       $(function() {
      var options = '';
      for (var i = 0; i < andhra.length; i++) {
          options += '<option value="' + andhra[i] + '">' + andhra[i] + '</option>';
      }
      $('#districtName').html(options);
      });
      }

      if (state=='Arunachal Pradesh') {
        var ap = ["Anjaw","Changlang","Dibang Valley","East Siang","East Kameng","Kurung Kumey","Lohit","Longding","Lower Dibang Valley","Lower Subansiri","Papum Pare",
                                            "Tawang","Tirap","Upper Siang","Upper Subansiri","West Kameng","West Siang"];
       $(function() {
      var options = '';
      for (var i = 0; i < ap.length; i++) {
          options += '<option value="' + ap[i] + '">' + ap[i] + '</option>';
      }
      $('#districtName').html(options);
      });
      }

      if (state=='Assam') {
        var assam = ["Baksa","Barpeta","Bongaigaon","Cachar","Chirang","Darrang","Dhemaji","Dima Hasao","Dhubri","Dibrugarh","Goalpara","Golaghat","Hailakandi","Jorhat",
                                         "Kamrup","Kamrup Metropolitan","Karbi Anglong","Karimganj","Kokrajhar","Lakhimpur","Morigaon","Nagaon","Nalbari","Sivasagar","Sonitpur","Tinsukia","Udalguri"];
       $(function() {
      var options = '';
      for (var i = 0; i < assam.length; i++) {
          options += '<option value="' + assam[i] + '">' + assam[i] + '</option>';
      }
      $('#districtName').html(options);
      });
      }

      if (state=='Bihar') {
        var bihar = ["Araria","Arwal","Aurangabad","Banka","Begusarai","Bhagalpur","Bhojpur","Buxar","Darbhanga","East Champaran","Gaya","Gopalganj","Jamui","Jehanabad","Kaimur",
                                            "Katihar","Khagaria","Kishanganj","Lakhisarai","Madhepura","Madhubani","Munger","Muzaffarpur","Nalanda","Nawada","Patna","Purnia","Rohtas","Saharsa",
                                            "Samastipur","Saran","Sheikhpura","Sheohar","Sitamarhi","Siwan","Supaul","Vaishali","West Champaran"];
       $(function() {
      var options = '';
      for (var i = 0; i < bihar.length; i++) {
          options += '<option value="' + bihar[i] + '">' + bihar[i] + '</option>';
      }
      $('#districtName').html(options);
      });
      }

      if (state=='Chhattisgarh') {
        var Chhattisgarh = ["Bastar","Bijapur","Bilaspur","Dantewada","Dhamtari","Durg","Jashpur","Janjgir-Champa","Korba","Koriya","Kanker","Kabirdham (formerly Kawardha)","Mahasamund",
                                                "Narayanpur","Raigarh","Rajnandgaon","Raipur","Surajpur","Surguja"];
       $(function() {
      var options = '';
      for (var i = 0; i < Chhattisgarh.length; i++) {
          options += '<option value="' + Chhattisgarh[i] + '">' + Chhattisgarh[i] + '</option>';
      }
      $('#districtName').html(options);
      });
      }

      if (state=='Dadra and Nagar Haveli') {
        var dadra = ["Amal","Silvassa"];
       $(function() {
      var options = '';
      for (var i = 0; i < dadra.length; i++) {
          options += '<option value="' + dadra[i] + '">' + dadra[i] + '</option>';
      }
      $('#districtName').html(options);
      });
      }

      if (state=='Daman and Diu') {
        var daman = ["Daman","Diu"];
       $(function() {
      var options = '';
      for (var i = 0; i < daman.length; i++) {
          options += '<option value="' + daman[i] + '">' + daman[i] + '</option>';
      }
      $('#districtName').html(options);
      });
      }

      if (state=='Delhi') {
        var delhi = ["Delhi","New Delhi","North Delhi","Noida","Patparganj","Sonabarsa","Tughlakabad"];
       $(function() {
      var options = '';
      for (var i = 0; i < delhi.length; i++) {
          options += '<option value="' + delhi[i] + '">' + delhi[i] + '</option>';
      }
      $('#districtName').html(options);
      });
      }

      if (state=='Goa') {
        var goa = ["Chapora","Dabolim","Madgaon","Marmugao (Marmagao)","Panaji Port","Panjim","Pellet Plant Jetty/Shiroda","Talpona","Vasco da Gama"];
       $(function() {
      var options = '';
      for (var i = 0; i < goa.length; i++) {
          options += '<option value="' + goa[i] + '">' + goa[i] + '</option>';
      }
      $('#districtName').html(options);
      });
      }

      if (state=='Gujarat') {
        var gujarat = ["Ahmedabad","Amreli district","Anand","Aravalli","Banaskantha","Bharuch","Bhavnagar","Dahod","Dang","Gandhinagar","Jamnagar","Junagadh",
                                            "Kutch","Kheda","Mehsana","Narmada","Navsari","Patan","Panchmahal","Porbandar","Rajkot","Sabarkantha","Surendranagar","Surat","Tapi","Vadodara","Valsad"];
       $(function() {
      var options = '';
      for (var i = 0; i < gujarat.length; i++) {
          options += '<option value="' + gujarat[i] + '">' + gujarat[i] + '</option>';
      }
      $('#districtName').html(options);
      });
      }

      if (state=='Haryana') {
        var haryana = ["Ambala","Bhiwani","Faridabad","Fatehabad","Gurgaon","Hissar","Jhajjar","Jind","Karnal","Kaithal",
                                                "Kurukshetra","Mahendragarh","Mewat","Palwal","Panchkula","Panipat","Rewari","Rohtak","Sirsa","Sonipat","Yamuna Nagar"];
       $(function() {
      var options = '';
      for (var i = 0; i < haryana.length; i++) {
          options += '<option value="' + haryana[i] + '">' + haryana[i] + '</option>';
      }
      $('#districtName').html(options);
      });
      }


      if (state=='Himachal Pradesh') {
        var himachal = ["Baddi","Baitalpur","Chamba","Dharamsala","Hamirpur","Kangra","Kinnaur","Kullu","Lahaul & Spiti","Mandi","Simla","Sirmaur","Solan","Una"];
       $(function() {
      var options = '';
      for (var i = 0; i < himachal.length; i++) {
          options += '<option value="' + himachal[i] + '">' + himachal[i] + '</option>';
      }
      $('#districtName').html(options);
      });
      }

      if (state=='Jammu and Kashmir') {
        var jammu = ["Jammu","Leh","Rajouri","Srinagar"];
       $(function() {
      var options = '';
      for (var i = 0; i < jammu.length; i++) {
          options += '<option value="' + jammu[i] + '">' + jammu[i] + '</option>';
      }
      $('#districtName').html(options);
      });
      }

      if (state=='Jharkhand') {
        var jharkhand = ["Bokaro","Chatra","Deoghar","Dhanbad","Dumka","East Singhbhum","Garhwa","Giridih","Godda","Gumla","Hazaribag","Jamtara","Khunti","Koderma","Latehar","Lohardaga","Pakur","Palamu",
                                                "Ramgarh","Ranchi","Sahibganj","Seraikela Kharsawan","Simdega","West Singhbhum"];
       $(function() {
      var options = '';
      for (var i = 0; i < jharkhand.length; i++) {
          options += '<option value="' + jharkhand[i] + '">' + jharkhand[i] + '</option>';
      }
      $('#districtName').html(options);
      });
      }

      if (state=='Karnataka') {
        var karnataka = ["Bagalkot","Bangalore","Bangalore Urban","Belgaum","Bellary","Bidar","Bijapur","Chamarajnagar", "Chikkamagaluru","Chikkaballapur",
                                               "Chitradurga","Davanagere","Dharwad","Dakshina Kannada","Gadag","Gulbarga","Hassan","Haveri district","Kodagu",
                                               "Kolar","Koppal","Mandya","Mysore","Raichur","Shimoga","Tumkur","Udupi","Uttara Kannada","Ramanagara","Yadgir"];
       $(function() {
      var options = '';
      for (var i = 0; i < karnataka.length; i++) {
          options += '<option value="' + karnataka[i] + '">' + karnataka[i] + '</option>';
      }
      $('#districtName').html(options);
      });
      }

      if (state=='Kerala') {
        var kerala = ["Alappuzha","Ernakulam","Idukki","Kannur","Kasaragod","Kollam","Kottayam","Kozhikode","Malappuram","Palakkad","Pathanamthitta","Thrissur","Thiruvananthapuram","Wayanad"];
       $(function() {
      var options = '';
      for (var i = 0; i < kerala.length; i++) {
          options += '<option value="' + kerala[i] + '">' + kerala[i] + '</option>';
      }
      $('#districtName').html(options);
      });
      }

      if (state=='Madhya Pradesh') {
        var mp = ["Alirajpur","Anuppur","Ashoknagar","Balaghat","Barwani","Betul","Bhilai","Bhind","Bhopal","Burhanpur","Chhatarpur","Chhindwara","Damoh","Dewas","Dhar","Guna","Gwalior","Hoshangabad",
                                        "Indore","Itarsi","Jabalpur","Khajuraho","Khandwa","Khargone","Malanpur","Malanpuri (Gwalior)","Mandla","Mandsaur","Morena","Narsinghpur","Neemuch","Panna","Pithampur","Raipur","Raisen","Ratlam",
                                        "Rewa","Sagar","Satna","Sehore","Seoni","Shahdol","Singrauli","Ujjain"];
       $(function() {
      var options = '';
      for (var i = 0; i < mp.length; i++) {
          options += '<option value="' + mp[i] + '">' + mp[i] + '</option>';
      }
      $('#districtName').html(options);
      });
      }

      if (state=='Maharashtra') {
        var maharashtra = ["Ahmednagar","Akola","Alibag","Amaravati","Arnala","Aurangabad","Aurangabad","Bandra","Bassain","Belapur","Bhiwandi","Bhusaval","Borliai-Mandla","Chandrapur","Dahanu","Daulatabad","Dighi (Pune)","Dombivali","Goa","Jaitapur","Jalgaon",
                                                 "Jawaharlal Nehru (Nhava Sheva)","Kalyan","Karanja","Kelwa","Khopoli","Kolhapur","Lonavale","Malegaon","Malwan","Manori",
                                                 "Mira Bhayandar","Miraj","Mumbai (ex Bombay)","Murad","Nagapur","Nagpur","Nalasopara","Nanded","Nandgaon","Nasik","Navi Mumbai","Nhave","Osmanabad","Palghar",
                                                 "Panvel","Pimpri","Pune","Ratnagiri","Sholapur","Shrirampur","Shriwardhan","Tarapur","Thana","Thane","Trombay","Varsova","Vengurla","Virar","Wada"];
       $(function() {
      var options = '';
      for (var i = 0; i < maharashtra.length; i++) {
          options += '<option value="' + maharashtra[i] + '">' + maharashtra[i] + '</option>';
      }
      $('#districtName').html(options);
      });
      }

       if (state=='Manipur') {
        var manipur = ["Bishnupur","Churachandpur","Chandel","Imphal East","Senapati","Tamenglong","Thoubal","Ukhrul","Imphal West"];
       $(function() {
      var options = '';
      for (var i = 0; i < manipur.length; i++) {
          options += '<option value="' + manipur[i] + '">' + manipur[i] + '</option>';
      }
      $('#districtName').html(options);
      });
      }

       if (state=='Meghalaya') {
        var meghalaya = ["Baghamara","Balet","Barsora","Bolanganj","Dalu","Dawki","Ghasuapara","Mahendraganj","Moreh","Ryngku","Shella Bazar","Shillong"];
       $(function() {
      var options = '';
      for (var i = 0; i < meghalaya.length; i++) {
          options += '<option value="' + meghalaya[i] + '">' + meghalaya[i] + '</option>';
      }
      $('#districtName').html(options);
      });
      }

       if (state=='Mizoram') {
        var mizoram = ["Aizawl","Champhai","Kolasib","Lawngtlai","Lunglei","Mamit","Saiha","Serchhip"];
       $(function() {
      var options = '';
      for (var i = 0; i < mizoram.length; i++) {
          options += '<option value="' + mizoram[i] + '">' + mizoram[i] + '</option>';
      }
      $('#districtName').html(options);
      });
      }

       if (state=='Nagaland') {
        var nagaland = ["Dimapur","Kiphire","Kohima","Longleng","Mokokchung","Mon","Peren","Phek","Tuensang","Wokha","Zunheboto"];
       $(function() {
      var options = '';
      for (var i = 0; i < nagaland.length; i++) {
          options += '<option value="' + nagaland[i] + '">' + nagaland[i] + '</option>';
      }
      $('#districtName').html(options);
      });
      }

      if (state=='Orissa') {
        var orissa = ["Bahabal Pur","Bhubaneswar","Chandbali","Gopalpur","Jeypore","Paradip Garh","Puri","Rourkela"];
       $(function() {
      var options = '';
      for (var i = 0; i < orissa.length; i++) {
          options += '<option value="' + orissa[i] + '">' + orissa[i] + '</option>';
      }
      $('#districtName').html(options);
      });
      }

      if (state=='Puducherry') {
        var puducherry = ["Karaikal","Mahe","Pondicherry","Yanam"];
       $(function() {
      var options = '';
      for (var i = 0; i < puducherry.length; i++) {
          options += '<option value="' + puducherry[i] + '">' + puducherry[i] + '</option>';
      }
      $('#districtName').html(options);
      });
      }

      if (state=='Punjab') {
        var punjab = ["Amritsar","Barnala","Bathinda","Firozpur","Faridkot","Fatehgarh Sahib","Fazilka","Gurdaspur","Hoshiarpur","Jalandhar","Kapurthala","Ludhiana","Mansa","Moga","Sri Muktsar Sahib","Pathankot",
                                            "Patiala","Rupnagar","Ajitgarh (Mohali)","Sangrur","Shahid Bhagat Singh Nagar","Tarn Taran"];
       $(function() {
      var options = '';
      for (var i = 0; i < punjab.length; i++) {
          options += '<option value="' + punjab[i] + '">' + napunjabgaland[i] + '</option>';
      }
      $('#districtName').html(options);
      });
      }

      if (state=='Rajasthan') {
        var rajasthan = ["Ajmer","Banswara","Barmer","Barmer Rail Station","Basni","Beawar","Bharatpur","Bhilwara","Bhiwadi","Bikaner","Bongaigaon","Boranada, Jodhpur","Chittaurgarh","Fazilka","Ganganagar","Jaipur","Jaipur-Kanakpura",
                                           "Jaipur-Sitapura","Jaisalmer","Jodhpur","Jodhpur-Bhagat Ki Kothi","Jodhpur-Thar","Kardhan","Kota","Munabao Rail Station","Nagaur","Rajsamand","Sawaimadhopur","Shahdol","Shimoga","Tonk","Udaipur"];
       $(function() {
      var options = '';
      for (var i = 0; i < rajasthan.length; i++) {
          options += '<option value="' + rajasthan[i] + '">' + rajasthan[i] + '</option>';
      }
      $('#districtName').html(options);
      });
      }

      if (state=='Sikkim') {
        var sikkim = ["Chamurci","Gangtok"];
       $(function() {
      var options = '';
      for (var i = 0; i < sikkim.length; i++) {
          options += '<option value="' + sikkim[i] + '">' + sikkim[i] + '</option>';
      }
      $('#districtName').html(options);
      });
      }


      if (state=='Tamil Nadu') {
        var tn = ["Ariyalur","Chennai","Coimbatore","Cuddalore","Dharmapuri","Dindigul","Erode","Kanchipuram","Kanyakumari","Karur","Krishnagiri","Madurai","Mandapam","Nagapattinam","Nilgiris","Namakkal","Perambalur","Pudukkottai","Ramanathapuram","Salem","Sivaganga","Thanjavur","Thiruvallur","Tirupur",
                                       "Tiruchirapalli","Theni","Tirunelveli","Thanjavur","Thoothukudi","Tiruvallur","Tiruvannamalai","Vellore","Villupuram","Viruthunagar"];
       $(function() {
      var options = '';
      for (var i = 0; i < tn.length; i++) {
          options += '<option value="' + tn[i] + '">' + tn[i] + '</option>';
      }
      $('#districtName').html(options);
      });
      }


      if (state=='Telangana') {
        var telangana = ["Adilabad","Hyderabad","Karimnagar","Mahbubnagar","Medak","Nalgonda","Nizamabad","Ranga Reddy","Warangal"];
       $(function() {
      var options = '';
      for (var i = 0; i < telangana.length; i++) {
          options += '<option value="' + telangana[i] + '">' + telangana[i] + '</option>';
      }
      $('#districtName').html(options);
      });
      }


      if (state=='Tripura') {
        var tripura = ["Agartala","Dhalaighat","Kailashahar","Kamalpur","Kanchanpur","Kel Sahar Subdivision","Khowai","Khowaighat","Mahurighat","Old Raghna Bazar","Sabroom","Srimantapur"];
       $(function() {
      var options = '';
      for (var i = 0; i < tripura.length; i++) {
          options += '<option value="' + tripura[i] + '">' + tripura[i] + '</option>';
      }
      $('#districtName').html(options);
      });
      }


      if (state=='Uttar Pradesh') {
        var up = ["Agra","Allahabad","Auraiya","Banbasa","Bareilly","Berhni","Bhadohi","Dadri","Dharchula","Gandhar","Gauriphanta","Ghaziabad","Gorakhpur","Gunji",
                                        "Jarwa","Jhulaghat (Pithoragarh)","Kanpur","Katarniyaghat","Khunwa","Loni","Lucknow","Meerut","Moradabad","Muzaffarnagar","Nepalgunj Road","Pakwara (Moradabad)",
                                        "Pantnagar","Saharanpur","Sonauli","Surajpur","Tikonia","Varanasi"];
       $(function() {
      var options = '';
      for (var i = 0; i < up.length; i++) {
          options += '<option value="' + up[i] + '">' + up[i] + '</option>';
      }
      $('#districtName').html(options);
      });
      }


      if (state=='Uttarakhand') {
        var uttarakhand = ["Almora","Badrinath","Bangla","Barkot","Bazpur","Chamoli","Chopra","Dehra Dun","Dwarahat","Garhwal","Haldwani","Hardwar","Haridwar","Jamal","Jwalapur","Kalsi","Kashipur","Mall",
                                               "Mussoorie","Nahar","Naini","Pantnagar","Pauri","Pithoragarh","Rameshwar","Rishikesh","Rohni","Roorkee","Sama","Saur"];
       $(function() {
      var options = '';
      for (var i = 0; i < uttarakhand.length; i++) {
          options += '<option value="' + uttarakhand[i] + '">' + uttarakhand[i] + '</option>';
      }
      $('#districtName').html(options);
      });
      }


      if (state=='West Bengal') {
        var wb = ["Alipurduar","Bankura","Bardhaman","Birbhum","Cooch Behar","Dakshin Dinajpur","Darjeeling","Hooghly","Howrah",
                                        "Jalpaiguri","Kolkata","Maldah","Murshidabad","Nadia","North 24 Parganas","Paschim Medinipur","Purba Medinipur","Purulia","South 24 Parganas","Uttar Dinajpur"];
       $(function() {
      var options = '';
      for (var i = 0; i < wb.length; i++) {
          options += '<option value="' + wb[i] + '">' + wb[i] + '</option>';
      }
      $('#districtName').html(options);
      });
      }
        if(x==2){
            setTimeout(function(){
                showVillages();
            },100);
        }
    }
    window.showVillages = function(){
        var state = $("#stateName").val();
        var district = $("#districtName").val();
        $.ajax({
            method: 'POST',
            datatype: 'application/json',
            url: 'fetchVillages.php',
            data: {
                'state':state,
                'district': district
            },
            success: function(result){
                result = JSON.parse(result);
                console.log(result);
                $("#villageNameOptions").show();
                var a = "<option>SELECT VILLAGE</option>";
                for(i = 0;i<result.length;i++){
                    var string = "<option value='"+result[i].vname+"'>"+result[i].vname+"</option>";
                    a = a + string;
                    $("#villageName").html(a);
                }
            },
            error: function(err){
                alert(err);
            }
        });
        
    }
    window.toggleSearchResults = function(){
        displayAllCanvas();
        var state = $("#stateName").val();
        var district = $("#districtName").val();
        var village = $("#villageName").val();
        $.ajax({
            method: 'POST',
            datatype: 'application/json',
            url: 'toggleSearchResJson.php',
            data: {
                'state':state,
                'district': district,
                'village': village
            },
            success: function(result){
                result = JSON.parse(result);
                console.log(result);
                $("#searchTable").show();
                 var a = "";
                for(i=0;i<result.length;i++){
                    var string = "<tr><td>"+state+"</td><td>"+district+"</td><td>"+result[i].ownername+"</td><td>"+result[i].taluka+"</td><td>"+result[i].newkhatanum+"</td><td><a href='showLandDetails.php?ownerNameGd="+result[i].ownername+"&tNameGd="+result[i].taluka+"&kNumbernewGd="+result[i].newkhatanum+"'>View Details</a><td></tr>";
                    a = a + string;
                    $("#searchTableBody").html(a);
                }
            },
            error: function(err){
                alert(err);
            }
        });
    }

});