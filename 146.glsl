#iChannel0 file://./_image/cat_01.jpg

const float mosaic = 20.;

void mainImage(out vec4 fragColor, in vec2 p) {

    // direction:x
    p.x = p.y + abs(sin(iTime * 20.));

    // direction:y
    // p.y = p.x + abs(cos(iTime * 20.));

    vec4 tex = texture2D(iChannel0, p);
    fragColor = tex;
    
}

void main(){

    // vec2 p = (gl_FragCoord.xy * 2. - iResolution.xy) / min(iResolution.x, iResolution.y);
    vec2 p = gl_FragCoord.xy / iResolution.xy;

    vec4 col;
    mainImage(col, p);
    gl_FragColor = col;

}