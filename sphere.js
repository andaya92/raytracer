
var Sphere = function(origin, radius) {
	
	// todo - make sure origin and radius are replaced with default values if and only
	//        if they are invalid(i.e. origin & radius should be Vector3) or undefined
	//        default origin should be zero vector
	//        default radius should be 1

	this.set = function(o, r){
		//Use this to check types
		let v = new Vector3();

		//If origin is not a vector3 obj, make it one
		if(typeof(o) != typeof(v)){
			o = new Vector3();
		}

		//if radius is given as vector, store length.
		if(typeof(r) == typeof(v)){
			r = r.length();
		}//if r is negative int, default to 1,
		else if(! r > 0){
			r = 1;
		}
		this.origin = o;
		this.radius = r;
	}

	this.set(origin, radius);

	this.raycast = function(ray) {
		// todo determine whether the ray intersects this sphere and where
		var result = {
			hit: null,
			point: null,
			normal: null,
			distance: null
		};
		
		//Translate sphere and ray objects to formula variable names, 
		//    and make clones to keep origin values intact.		
		let vc = this.origin.clone();
		let vo = ray.origin.clone();
		let vd = ray.direction.clone();
		let voMvc = ray.origin.subtract(this.origin);

		//Find coefficients
		let a = vd.dot(vd);
		let b = voMvc.dot(vd) * 2;
		let c =  voMvc.length()**2 - this.radius**2;

		//Find determinant
		let det = b**2 - 4*a*c;

		//If determinant is negative, not possible to solve, no solution
		if(det < 0){
			result.hit = false;
			return result;
		}

		//Solve quadratic if det > 0
		let detRt = Math.sqrt(det);
		let ans1 = (-b + detRt ) / (2*a);
		let ans2 = (-b - detRt ) / (2*a);

		let t = Math.round(Math.min(ans1, ans2)); //pick closest point and round answer; this is scalar that scales d-hat and intersects our sphere
		
		//if negative, that means it has a negative intersection, 
		//  ray must go in opposite direction its pointing to intersect, not good
		if(t < 0){
			result.hit = false;
			return result;	
		}

		//Else we make contact with surface. 

		result.hit = true;

		//Solve vo + td = Point on the sphere surface

		// t * vector d
		let td = vd.clone();
		td.multiplyScalar(t);

		//vo + td
		result.point = vo.clone();
		result.point.add(td);

		//distance =  |t*d|
		result.distance = vd.clone();
		result.distance.multiplyScalar(t);
		result.distance = result.distance.length();


		result.normal = result.point.clone();
		result.normal.multiplyScalar(2); // point of intersection = <x,y,z> AND normal vector is <2x, 2y, 2z>
		result.normal.normalize(); //make normal vector a unit vector aka a normal unit vector.

		return result;
	}
};