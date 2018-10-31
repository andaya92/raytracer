/*
 * An object representing a 3d vector to make operations simple and concise.
 */

var Vector3 = function(x=0, y=0, z=0) {
	this.x = x; this.y = y; this.z = z;

	// todo - make sure to set a default value in case x, y, or z is not passed in

	this.set = function(x, y, z) {
		//todo set this' values to those from x, y, and z
		this.x = x; this.y = y; this.z = z;
		return this;
	}

	this.clone = function() {
		return new Vector3(this.x, this.y, this.z);
	};

	this.copy = function(other) {
		// copy the values from other into this
		this.x = other.x; this.y = other.y; this.z = other.z; 
		return this;
	}

	this.add = function(v) {
		// todo - add v to this vector (1pt)
		// This SHOULD change the values of this.x, this.y, and this.z
		this.x += v.x; this.y += v.y; this.z += v.z; 
		return this;
	};

	this.subtract = function(v) {
		// todo - subtract v from this vector (1pt)
		// This SHOULD change the values of this.x, this.y, and this.z
		this.x -= v.x; this.y -= v.y; this.z -= v.z; 
		return this;
	};

	this.negate = function() {
		// multiply this vector by -1 (1pt)
		// This SHOULD change the values of this.x, this.y, and this.z
		this.x *= -1; this.y *= -1; this.z *= -1; 
		return this;
	};

	this.multiplyScalar = function(scalar) {
		// multiply this vector by "scalar" (1pt)
		// This SHOULD change the values of this.x, this.y, and this.z
		this.x *= scalar; this.y *= scalar; this.z *= scalar; 
		return this;
	};

	this.length = function() {
		// todo - return the magnitude (a.k.a length) of this vector (1pt)
		// This should NOT change the values of this.x, this.y, and this.z
		return Math.sqrt(this.x**2 + this.y**2 + this.z**2 );
	};

	this.lengthSqr = function() {
		// todo - return the squared magnitude of this vector ||v||^2 (1pt)
		// This should NOT change the values of this.x, this.y, and this.z
		return this.length()**2;
	};

	this.normalized = function() {
		// todo - return a new vector that is a normalized version of this vector (1pt)
		// This should NOT change the values of this.x, this.y, and this.z
		let m = this.length();
		let norm = this.clone();
		norm.x /= m; norm.y /= m; norm.z /= m;
		return norm; // Should return a new vector that is not this
	};

	this.normalize = function() {
		// todo - Change the components of this vector so that its magnitude will equal 1. (1pt)
		// This SHOULD change the values of this.x, this.y, and this.z
		let m = this.length();
		this.x /= m; this.y /= m; this.z /= m;
		return this;
	};

	this.dot = function(other) {
		// todo - return the dot product betweent this vector and "other" (5pt)
		// This should NOT change the values of this.x, this.y, and this.z
		return (this.x * other.x) + (this.y * other.y) + (this.z * other.z);
		
	};

	this.cross = function(other) {
		// todo - return the cross product (as a new vector) betweent this vector and "other" (3pt)
		// This should NOT change the values of this.x, this.y, and this.z
		return new Vector3((this.y*other.z) - (this.z*other.y), (this.z*other.x) - (this.x*other.z), (this.x*other.y) - (this.y*other.x));
	}
};
