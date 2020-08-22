function $query(selector){
    const self = {
        element: document.querySelector(selector),
        html : () => self.element,
        on : (event, callback) => {
            self.element.addEventListener(event, callback);
        },
        attr:(name, value)=>{
            if(value == null){
                self.element.getAttribute(name);
            }
            else{
                self.element.setAttribute(name, value);
            }
        },
        setHtml: (value) => {
            self.element.innerHtml = value;
        },
        redirect:(url)=>{
			location.replace(url)
		},
		get: (name)=>{
			var url_string = $query().url;
			var url = new URL(url_string);
			var value = url.searchParams.get(name);

			return value;
		},
        url: window.location.href,
        version:'1.0.0'
    };

    return self;
}