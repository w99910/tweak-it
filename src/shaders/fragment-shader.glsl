uniform float u_time;
uniform vec2 u_mouse;
varying vec2 vUv;
uniform sampler2D t;
varying vec3 vPosition;

void main(){
    vec4 t = texture2D(t, vUv);

    float dist = distance(vPosition.xy, u_mouse);

      // Color based on distance
    vec3 color = vec3(1.0 - dist);

    gl_FragColor = vec4(color, 1.);
}