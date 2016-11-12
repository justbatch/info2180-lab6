window.onload = function()
{
            var two = document.getElementById("two");
                two.addEventListener("click", function(event)
            {
                //get the XHML request of the html file
                event.preventDefault();
                var getHTTP = new XMLHttpRequest();
                getHTTP.onreadystatechange = getHTML;
                var url = "request.php?q="+document.getElementById("one").value;
                getHTTP.open("Get", url);
                getHTTP.send();
                
                function getHTML()
                {
                    if(getHTTP.readyState === XMLHttpRequest.DONE)
                    {
                        if(getHTTP.status === 200)
                        {
                            var def = getHTTP.responseText;
                            // console.log(def);
                            document.getElementById("result").innerHTML = def;
                        }
                    }
                }
            });    
            
                var three = document.getElementById("three");
                    three.addEventListener("click", function(event)
                    {
                        event.preventDefault();
                        //calling for XML data in php
                        var getXMLdata = new XMLHttpRequest();
                        getXMLdata.onreadystatechange = getXML;
                        var link = "request?q=&all=true"+document.getElementById("three").value;
                        getXMLdata.open("Get", link);
                        getXMLdata.send();
                        
                        function getXML()
                        {
         
                            if(getXMLdata.readyState === XMLHttpRequest.DONE)
                            {
                                if(getXMLdata.status === 200)
                                {
                                    var define = getXMLdata.responseXML;
                                    var result = document.getElementById("result").innerHTML = define;
                                    var r = result.querySelector("#result");
                                    var dictionary = define.getElementsByTagName("dictionary");
                                    var lis = document.createElement("ol");
                                    r.appendChild(lis);
                                    for(var u = 0; u < dictionary.length; u++)
                                    {
                                        var dict = document.createElement("li");
                                        var text = document.createTextNode(dict[u].childNodes[0].nodeValue);
                                        dict.appendChild(text);
                                    }
                                }
                            }
                        }
                    });
           
};