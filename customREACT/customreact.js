// function customRender(reactElement, maincontainer){
    //  const domele = document.createElement(reactElement.type)
    //  domele.innerHTML = reactElement.children
    //  domele.setAttribute('href',reactElement.props.href)
    //  domele.setAttribute('target',reactElement.props.target)
    // maincontainer.appendChild(domele)
// }
    function customRender(reactElement, maincontainer){
const domele= document.createElement(reactElement.type)
domele.innerHTML=reactElement.children
for (const prop in reactElement.props) {
    if (prop === 'children')continue;
    domele.setAttribute(prop,reactElement.props[prop])
    }
    maincontainer.appendChild(domele)
}
const reactElement = {
    type: 'a',
    props : {
        href: "https://google.com",
        target:"_blank"
    },
    children: 'Click Me to visit GOOLGE'
}
const mainContainer = document.querySelector('#root')
customRender(reactElement,mainContainer)