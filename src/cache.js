class CacheContext
{
	constructor(key, value, counter)
	{
		this.key = key;
		this.value = value;
		this.counter = counter;
	}
}

export class Cache
{
	constructor()
	{
		this.data = [];
	}
	
	getLength()
	{
		return this.data.length;
	}
	
	add(key, value, counter = 1)
	{
		let i = this.data.findIndex(x => x.key == key);
		
		if(i >= 0)
			this.data[i] = {key, value, counter};
		else
			this.data.push(new CacheContext(key, value, counter));
	}
	
	getValue(key)
	{
		let i = this.data.findIndex(x => x.key == key);
		
		if(i < 0)
			return null;
		
		let item = this.data[i];
		
		if(--this.data[i].counter == 0)
			this.data.splice(i, 1);
		
		return item.value;
	}

	isKey(key)
	{	
		return (this.data.findIndex(x => x.key == key) >= 0);
	}
	
	getCounter(key)
	{
		let i = this.data.findIndex(x => x.key == key);
		
		if(i < 0)
			return null;
		
		return this.data[i].counter;
	}
	
}
//export {Cache}


