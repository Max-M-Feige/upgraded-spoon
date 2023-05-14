

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    float maxValue = 65535.0;
    // Normalized pixel coordinates (from 0 to 1)
    vec2 uv = fragCoord/iResolution.xy;
    int x = int(round(uv.x * maxValue));
    int y = int(round(uv.y * maxValue));
    
    float value = float(x | y);
    vec3 col = vec3(value/maxValue);
    // Output to screen
    fragColor = vec4(col,1.0);
}