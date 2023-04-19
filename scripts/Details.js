var value=JSON.parse(localStorage.getItem("indatails"))


var image_box=document.getElementById("image")
var iamge_url=document.createElement("img")
iamge_url.setAttribute("id","side_image")
iamge_url.src=value.imge_url
image_box.append(iamge_url)
var details_box=document.getElementById('details')
var pd_name=document.createElement("h2")
pd_name.innerText=value.name

pd_dis=document.createElement("p")
pd_dis.innerText=value.Dis
pd_rev=document.createElement("img")
pd_rev.src="/Images/review.png"
pd_price=document.createElement("h5")
pd_price.innerText=`₹${value.price1}`
pd_EMI=document.createElement("img")
pd_EMI.src="./Images/emi.png"
pd_addtocart=document.createElement("button")
pd_addtocart.addEventListener("click",function(){
    tocart(value)
    increase()

})
pd_addtocart.innerText="ADD TO CART"

pd_del=document.createElement("img")
pd_del.src="./Images/details.png"
details_box.append(pd_name,pd_dis,pd_rev,pd_price,pd_EMI,pd_addtocart,pd_del)

var earphonedata = [
    
    {
        imge_url: "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-BLON-BL-03-Silver-1160-1160-6_400x.jpg?v=1593432193",
        imge_url2:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main1_c1144ee5-d03e-483a-8e5f-7552b138a4b1_300x.png?v=1649857754",
        name: "BLON - BL-03",
        Dis: "In-Ears With 1 Dynamic Driver",
        price1: "1,990",
        price2: "3,999"
    },
    {
        imge_url: "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-KZ-ZEX-Pro-Black-01_400x.jpg?v=1641194893",
        imge_url2:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-img-R333_300x.png?v=1641801662",
        name: "KZ X CRINACLE - CRN (ZEX PRO)",
        Dis: "Tribrid Driver In-Ears Tuned By Crinacle",
        price1: "2,790",
        price2: "4,999"
    },
    {
        imge_url: "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Final-E500-1160-1160-9_400x.jpg?v=1637903241",
        imge_url2:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-img-R333_300x.png?v=1641801662",
        name: "FINAL - E500",
        Dis: "Earphones For Spatial Audio",
        price1: "1,599",
        price2: "1,999"
    },
    {
        imge_url: "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-final-Audio-E2000-Black-New_400x.jpg?v=1632220373",
        imge_url2:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-img-R333_300x.png?v=1641801662",
        name: "FINAL - E2000",
        Dis: "In-Ears With 1 Dynamic Driver",
        price1: "2,799",
        price2: "2,999"
    },
    {
        imge_url: "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Final-Audio-E3000-08_400x.jpg?v=1632399354",
        imge_url2:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-img-R333_300x.png?v=1641801662",
        name: "FINAL - E3000",
        Dis: "In-Ears With 1 Dynamic Driver",
        price1: "3,699",
        price2: "3,999"
    },
    {
        imge_url: "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Final-Audio-VR3000-15_400x.jpg?v=1633676571",
        imge_url2:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-img-R333_300x.png?v=1641801662",
        name: "FINAL - VR3000",
        Dis: "In-Ears With 1 Dynamic Driver",
        price1: "5,999",
        price2: "7,999"
    },
    {
        imge_url: "https://cdn.shopify.com/s/files/1/0153/8863/products/Meze-12-Classics-V2-02_400x.jpg?v=1612869168",
        imge_url2:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-img-R333_300x.png?v=1641801662",
        name: "MEZE - 12 CLASSICS V2",
        Dis: "In-Ears With 1 Dynamic Driver",
        price1: "4,499",
        price2: "6,999"
    },
    {
        imge_url: "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-HiFiMAN-RE800-1160-1160-011_400x.jpg?v=1643803585",
        imge_url2:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-img-R333_300x.png?v=1641801662",
        name: "HIFIMAN - RE800",
        Dis: "In-Ears With 9.2mm Nanotech Topology Dynamic Driver",
        price1: "11,999",
        price2: "12,999"
    },
    {
        imge_url: "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-iBasso-IT01X-Black-04_400x.jpg?v=1634645565",
        imge_url2:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-img-R333_300x.png?v=1641801662",
        name: "IBASSO - IT01X",
        Dis: "n-Ears With 1 Dynamic Driver",
        price1: "10,999",
        price2: "11,999",
        price2: "11,999",
        price2: "11,999"
    },
    {
        imge_url: "https://cdn.shopify.com/s/files/1/0153/8863/products/397b9537bf78aea1a4a4acc4496a47fe_400x.jpg?v=1641184507",
        imge_url2:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-img-R333_300x.png?v=1641801662",
        name: "1CUSTOM - JUNIOR",
        Dis: "In-Ears With 1 DD + 2 BA Drivers",
        price1: "15,999",
        price1: "15,999",
        price2: "16,999"
    },
    {
        imge_url: "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Campfire-Audio-Honeydew-02_400x.jpg?v=1624099609",
        imge_url2:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-img-R333_300x.png?v=1641801662",
        name: "CAMPFIRE AUDIO - HONEYDEW",
        Dis: "In-Ears With 1 Dynamic Driver",
        price1: "19,999",
        price2: "24,999"
    },

];
var earphone_display=document.getElementById('show')

earphonedata.forEach(e => {

    var ear_div=document.createElement("div")
    ear_div.addEventListener("click",function(){
        details(e)
window.location.href="./Details.html"
    })
    ear_div.setAttribute("id","ear_div_scroll")
    var ear_img=document.createElement("img")
    ear_img.setAttribute("id","ear_div_scroll_img")
    ear_img.src=e.imge_url
    var ear_name=document.createElement("b")
    ear_name.innerText=e.name
    var ear_price=document.createElement("p")
    ear_price.innerText=e.price1
    ear_rev=document.createElement("img")
ear_rev.src="/Images/review.png"
ear_div.append(ear_img,ear_name,ear_price,ear_rev)
earphone_display.append(ear_div)
    

});
var left=document.getElementById("btntoleft")
var right=document.getElementById("btntoright")


right.onclick =function(){
    show.scrollLeft+=300
}

left.onclick =function(){
    show.scrollLeft-=300
}
var headphone = [
    {
        imge_url: "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Meze-99-Neo-1160-1160-2_400x.jpg?v=1591944478",
        name: "MEZE - 99 NEO",
        Dis: "Closed-Back Headphone",
        price1: "₹ 14,999",
        price2: "₹ 19,999",
        dummyimg: "",
    },
    {
        imge_url: "https://cdn.shopify.com/s/files/1/0153/8863/products/sennheiser-hd-569-headphone-zone-29093551111_400x.jpg?v=1579780219",
        name: "SENNHEISER - HD 569",
        Dis: "Semi Open-Back Headphone",
        price1: "₹ 12,990",
        price2: "₹ ",
        dummyimg: "",
    },
    {
        imge_url: "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Campfire-Audio-Honeydew-02_400x.jpg?v=1624099609",
        name: "HIFIMAN - HE400SE",
        Dis: "Planar Magnetic Open Backs",
        price1: "₹ 10,990",
        price2: "₹ ₹ 16,999 ",
        dummyimg: "",
    },


    {
        imge_url: "https://cdn.shopify.com/s/files/1/0153/8863/products/beyerdynamic-dt-770-pro-headphone-zone-13980464185407_400x.jpg?v=1579662488",
        name: "BEYERDYNAMIC - DT 770 PRO",
        Dis: "Closed-Back Studio Headphone",
        price1: "From ₹ 9,999",
        price2: "₹ 17,050",
        dummyimg: "C:\Users\Parteek Arora\OneDrive\Desktop\Construct week\Capture.PNG",
    },
    {
        imge_url: "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-dt-990-pro-1160-1160-5_400x.jpg?v=1598946254",
        name: "BEYERDYNAMIC - DT 990 PRO",
        Dis: "Open-Back Studio Headphone",
        price1: "₹ 12,999",
        price2: "₹ 16,489",
        dummyimg: "C:\Users\Parteek Arora\OneDrive\Desktop\Construct week\Capture.PNG",
    },
    {
        imge_url: "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-HiFiMAN-Sundara-1160-1160-2_400x.jpg?v=1592332661",
        name: "MEZE - 99 CLASSICS",
        Dis: "Closed-Back Headphone",
        price1: "₹ 26,999",
        price2: "₹ 30,999",
        dummyimg: "C:\Users\Parteek Arora\OneDrive\Desktop\Construct week\Capture.PNG",
    },
    {
        imge_url: "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-HiFiMAN-Deva-Wired-1160-1160-6_400x.jpg?v=1596280148",
        name: "AUDIO-TECHNICA - ATH-M50X",
        Dis: "In-Ears With 1 DD + 1 BA Drivers",
        price1: "From ₹ 1,699",
        price2: "₹ 2,499",
        dummyimg: "C:\Users\Parteek Arora\OneDrive\Desktop\Construct week\Capture.PNG",
    },
    {
        imge_url: "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Audio-technica-m50x-1160-1160-Black_400x.jpg?v=1590592477",
        name: "HIFIMAN - DEVA (WIRED)",
        Dis: "In-Ears With 1 DD + 1 BA Drivers",
        price1: "From ₹ 1,699",
        price2: "₹ 2,499",
        dummyimg: "C:\Users\Parteek Arora\OneDrive\Desktop\Construct week\Capture.PNG",
    },
    {
        imge_url: "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-grado-SR60x-01_400x.jpg?v=1648039536",
        name: "AUDIO-TECHNICA - ATH-R70X",
        Dis: "In-Ears With 1 DD + 1 BA Drivers",
        price1: "From ₹ 1,699",
        price2: "₹ 2,499",
        dummyimg: "C:\Users\Parteek Arora\OneDrive\Desktop\Construct week\Capture.PNG",
    },
    {
        imge_url: "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Grado-SR80x-02_400x.jpg?v=1647928592",
        name: "SHURE - SRH440",
        Dis: "In-Ears With 1 DD + 1 BA Drivers",
        price1: "From ₹ 1,699",
        price2: "₹ 2,499",
        dummyimg: "C:\Users\Parteek Arora\OneDrive\Desktop\Construct week\Capture.PNG",
    },
    {
        imge_url: "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Grado-SR125x-02_400x.jpg?v=1647947259",
        name: "KS - ZEN PRO X",
        Dis: "In-Ears With 1 DD + 1 BA Drivers",
        price1: "From ₹ 1,699",
        price2: "₹ 2,499",
        dummyimg: "C:\Users\Parteek Arora\OneDrive\Desktop\Construct week\Capture.PNG",
    },
    {
        imge_url: "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Grado-SR225x-1_400x.jpg?v=1647951107",
        NAME: "GRADO - SR60X",
        Dis: "In-Ears With 1 DD + 1 BA Drivers",
        price1: "From ₹ 1,699",
        price2: "₹ 2,499",
        dummyimg: "C:\Users\Parteek Arora\OneDrive\Desktop\Construct week\Capture.PNG",
    },
    {
        imge_url: "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Grado-SR325x-7_400x.jpg?v=1648446832",
        name: "GRADO - SR225X",
        Dis: "In-Ears With 1 DD + 1 BA Drivers",
        price1: "From ₹ 1,699",
        price2: "₹ 2,499",
        dummyimg: "C:\Users\Parteek Arora\OneDrive\Desktop\Construct week\Capture.PNG",
    },
    {
        imge_url: "https://cdn.shopify.com/s/files/1/0153/8863/products/v-moda-crossfade-m-100-master-headphone-zone-11985642913855_400x.jpg?v=1581077461",
        name: "GRADO - SR325X",
        Dis: "In-Ears With 1 DD + 1 BA Drivers",
        price1: "From ₹ 1,699",
        price2: "₹ 2,499",
        dummyimg: "C:\Users\Parteek Arora\OneDrive\Desktop\Construct week\Capture.PNG",
    },
    {
        imge_url: "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Campfire-Audio-Honeydew-02_400x.jpg?v=1624099609",
        name: "V-MODA - CROSSFADE M-100 MASTER",
        Dis: "In-Ears With 1 DD + 1 BA Drivers",
        price1: "From ₹ 1,699",
        price2: "₹ 2,499",
        dummyimg: "C:\Users\Parteek Arora\OneDrive\Desktop\Construct week\Capture.PNG",
    },

];
var headphone_display=document.getElementById('showheadphone')

headphone.forEach(e => {

    var head_div=document.createElement("div")
    head_div.addEventListener("click",function(){
        details(e)
window.location.href="./Details.html"
    })
    head_div.setAttribute("id","head_div_scroll")

    var head_img=document.createElement("img")
    head_img.setAttribute("id","head_div_scroll_img")
    head_img.src=e.imge_url
    var head_name=document.createElement("b")
    head_name.innerText=e.name
    var head_price=document.createElement("p")
    head_price.innerText=e.price1
    head_rev=document.createElement("img")
head_rev.src="/Images/review.png"
head_div.append(head_img,head_name,head_price,head_rev)
headphone_display.append(head_div)
    

});
var lefthead=document.getElementById("headtoleft")
var righthead=document.getElementById("headtoright")


righthead.onclick =function(){
    showheadphone.scrollLeft+=300
}

lefthead.onclick =function(){
    showheadphone.scrollLeft-=300
}


var lc_len
    if(localStorage.getItem("counter")==null){
        lc_len=0
    }
    else{
        lc_len=localStorage.getItem("counter")
    }

    function increase(){
        
        lc_len++
      
        localStorage.setItem("counter",lc_len)
        
    }
function tocart(value){
    let arr=localStorage.getItem("Additemtocart")?JSON.parse(localStorage.getItem("Additemtocart")):[];
    arr.push(value)
    localStorage.setItem("Additemtocart",JSON.stringify(arr))
    alert("Add to cart sucessfully")
    
}
function details(mendata){
    localStorage.setItem("indatails",JSON.stringify(mendata))
}