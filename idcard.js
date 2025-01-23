
        let div1 = document.createElement("div");
        let name= document.createElement("div");
        let clgname = document.createElement("p")
        let image=document.createElement("img")
        let rollno=document.createElement("div")
        let course=document.createElement("div")
        let contact=document.createElement("div")
        let address=document.createElement("div")


        function addDiv()
        {
        div1.style.height = "400px";
        div1.style.width = "300px";
        div1.style.border = "3px solid grey";
        div1.style.margin="10px";
        div1.style.backgroundImage=`url("https://i.pinimg.com/736x/83/59/8a/83598a5ab3f5371e7662b565836c0c39.jpg")`;
        document.body.append(div1);
        }
        // let image = document.createElement("img");
         
        clgname.innerHTML="ANURAG UNIVERSITY";
        clgname.style.fontSize="20px"
        clgname.style.marginLeft="50px";
        clgname.style.marginTop="20px";
        // clgname.style.alignItems="center";
        div1.append(clgname);

        image.setAttribute("src","./fb8.jpg")
        image.style.height = "20%";
        image.style.width = "40%";
        image.style.borderRadius="150px";
        image.style.marginLeft="80px";
        image.style.marginTop="5px"
        div1.append(image);

        // let name = document.createElement("n1");
        name.innerHTML="Dyamakka Himavarsha";
        name.style.fontSize="25px";
        name.style.marginLeft="40px";
        name.style.margintop="40px"
        div1.append(name);

        rollno.innerHTML="Roll.no: 20eg105520";
        rollno.style.marginLeft="80px"
        rollno.style.marginTop="20px"
        div1.append(rollno);

        course.innerHTML="Class: B-Tech";
        course.style.marginLeft="80px"
        course.style.marginTop="20px"
        div1.append(course);
        
        contact.innerHTML="Contact : 9059051427";
        contact.style.marginLeft="80px"
        contact.style.marginTop="15px"
        div1.append(contact); 
        
        address.innerHTML="Venkatapur, Ghatkesar Rd, Hyderabad, Telangana 500088";
        address.style.marginTop="35px";
        address.style.marginLeft="35px";
        div1.append(address);
        // let clgname = document.createElement("c1");
        // clgname.innerHTML="Anurag University,Ghatkesar,Hyderabad";
        // clgname.style.fontSize="20px"
        // clgname.style.marginLeft="30px";
        // clgname.style.marginTop="130px";
        // // clgname.style.alignItems="center";
        // div1.append(clgname);