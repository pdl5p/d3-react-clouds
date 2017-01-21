

const createHook = (comp,elem,statename) => {
	let elems = new Map(),
		interval
	const updateState = ()=> {
		comp.setState({[statename]:elem.toReact()})
	}
	setTimeout(updateState)
	comp.isAnimating = ()=> !!interval
	return (transition)=> {
		transition.each((e)=>{
			elems.set(e,(elems.get(e) || new Set()).add(transition.id))
			interval = interval || setInterval(updateState,16)
		})
		transition.each("end",(e)=>{
			let anims = elems.get(e)
			anims.delete(transition.id)
			if (anims.size){
				elems.set(e,anims)
			} else {
				elems.delete(e)
			}
			if (!elems.size) interval = clearInterval(interval)
		})
	}
}

export { createHook };