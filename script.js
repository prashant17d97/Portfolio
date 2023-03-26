var isNot = true
function changed(Paragraph) {
    var value=""
    if (isNot) {
        isNot = false
        value = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos ";
    } else {
        isNot = true
        value = "Hi, I'm just dummy text.";
    }
    document.getElementById(Paragraph).innerHTML = value;
    console.log('object :>> ', 10 + 10);
}


function smoothScroll(idValue) {
    smoothScroll(document.getElementById(idValue))
}