


var Sphere = function(origin, radius) {
	
	// todo - make sure origin and radius are replaced with default values if and only
	//        if they are invalid(i.e. origin & radius should be Vector3) or undefined
	//        default origin should be zero vector
	//        default radius should be 1

	this.set = function(o, r){
		let v = new Vector3();
		if(typeof(o) != typeof(v)){
			o = new Vector3();
		}
		//if radius is given as vector, store length.
		if(typeof(r) == typeof(v)){
			r = r.length();
		}//if r is negative int,
		else if(! r > 0){
			r = 1;
		}
		this.origin = o;
		this.radius = r;
	}

	this.set(origin, radius);

	this.raycast = function(ray) {
		// todo determine whether the ray intersects this sphere and where

		// Recommended steps
		// 1. review slides/book math
		// 2. create the vector(s) needed to solve for the coefficients in the
		//    quadratic equation
		let vc = this.origin.clone();
		let vo = ray.origin.clone();
		let vd = ray.direction.clone();
		let voMvc = ray.origin.subtract(this.origin);

		let a = vd.dot(vd);
		let b = voMvc.dot(vd) * 2;
		let c =  voMvc.length()**2 - this.radius**2;

		let det = b**2 - 4*a*c;

		let detRt = Math.sqrt(det);
		let ans1 = (-b + detRt ) / (2*a);
		let ans2 = (-b - detRt ) / (2*a);

		// 3. calculate the discriminant
		// 4. use the result of the discriminant to determine if further computation
		//    is necessary
		// 5. return the following javascript object literal with the following properties
		//		case 1: no VALID intersections
		//	      var result = { hit: false, point: null }
		//		case 2: 1 or more intersections
		//			var result = {
		//        		hit: true,
		// 				point: 'a Vector3 containing the closest VALID intersection',
		//              normal: 'a vector3 containing a unit length normal at the intersection',
		//              distance: 'a scalar containing the intersection distance from the ray origin'
		//          }

		// todo - fill this in with the correct values
		var result = {
			hit: null,
			point: null,
			normal: null,
			distance: null
		};

		return result;
	}
};