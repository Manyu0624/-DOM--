window.dom = {
    // create(tag) {
    //     const box = document.createElement('template');
    //     box.innerHTML = tag.trim();
    //     return box.content.firstChild;
    // },
    // before(node, node2) {
    //     node.parentNode.insertBefore(node2, node);
    //     return node
    // },
    // append(parent, node) {
    //     parent.appendChild(node);
    //     return node
    // },
    // wrap(node, parent) {
    //     dom.before(node, parent);
    //     dom.append(parent, node);
    // },
    // remove(node) {
    //     node.remove(node)
    //     return node
    // },
    // empty(node) {
    //     const array = [];
    //     let x = node.firstChild
    //     while (x) {
    //         array.push(dom.remove(node.firstChild))
    //         x = node.firstChild

    //     }
    //     return array
    // },
    // attr(node, name, value) {
    //     node.setAttribute(name, value)
    //     return node
    // },
    // attr(node, name, value) { // 重载
    //     if (arguments.length === 3) {
    //         return node.setAttribute(name, value)
    //     } else if (arguments.length === 2) {
    //         return node.getAttribute(name)
    //     }
    // },
    // text(node, string) {
    //     if (arguments.length === 2) {
    //         if ('innerText' in node) {
    //             node.innerText = string
    //         } else if ('textContent' in node) {
    //             node.textContent = var1
    //         }
    //         return string
    //     } else if (arguments.length === 1) {
    //         if ('innerText' in node) {
    //             return node.innerText
    //         } else if ('textContent' in node) {
    //             return node.textContent
    //         }
    //     }

    // },
    // html(node, string) {
    //     if (arguments.length === 2) {
    //         node.innerHTML = string
    //             // return node.innerHTML
    //     } else if (arguments.length === 1) {
    //         return node.innerHTML
    //             // node.innerHTML = string
    //     }
    //     return node
    // },
    style(node, name, value) {
        if (arguments.length === 3) {
            // dom.style(div, 'color', 'red')
            node.style[name] = value
        } else if (arguments.length === 2) {
            if (typeof name === 'string') {
                // dom.style(div, 'color')
                return node.style[name]
            } else if (name instanceof Object) {
                // dom.style(div, {color: 'red'})
                const object = name
                for (let key in object) {
                    node.style[key] = object[key]
                }
            }
        }
    },

    find(selector, scope) {
        return (scope || document).querySelectorAll(selector)
    },


    each(nodeList, fn) {
        for (let i = 0; i < nodeList.length; i++) {
            fn.call(null, nodeList[i])
        }
    }








}