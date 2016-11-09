window.onload = function()
{
            var two = document.getElementById("two");
                two.addEventListener("click", function(event)
            {
                //get the XHML request of the html file
                event.preventDefault();
                var getHTTP = new XMLHttpRequest();
                getHTTP.onreadystatechange = getHTML;
                getHTTP.open("Get", "request.php?q=definition");
                getHTTP.send();
                
                function getHTML()
                {
                    if(getHTTP.readyState === XMLHttpRequest.DONE)
                    {
                        if(getHTTP.status === 200)
                        {
                            alert(getHTTP.responseText);
                        }
                    }
                }
            });
           
};