#ifdef GL_ES
precision highp float;
#endif

uniform vec2 resolution;
uniform vec2 mouse;
uniform float time;
uniform sampler2D backbuffer;

vec2 rotate(vec2 v, float a) {
	float s = sin(a);
	float c = cos(a);
	mat2 m = mat2(c, -s, s, c);
	return m * v;
}

void main(void){

  vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x, resolution.y);

  vec2 q = mod(uv, .2) - .1;
  		 // q += rotate(q, time * 2.);

  float f = 0.2 / abs(q.x) * abs(q.y);
	float c = .4 - length(q);
				// c += rotate(uv, time * 2.);

  gl_FragColor = vec4(vec3(c), 1.0);

}