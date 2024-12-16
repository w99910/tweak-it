uniform float u_time;
uniform vec2 u_mouse;
uniform int u_i;
varying vec2 vUv;
varying vec3 vPosition;

void main() {
    vUv = uv;
    vPosition = position;
    vPosition.x += float(u_i) * 2.;
    gl_Position= projectionMatrix * modelViewMatrix * vec4(vPosition, 1.0);
}