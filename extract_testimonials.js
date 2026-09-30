const fs = require('fs');
const css = fs.readFileSync('public/style.css', 'utf8');
const lines = css.split('\n');

let extracted = [];
let inTestimonialBlock = false;
let braceCount = 0;

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Check if line contains any testimonial related selector
    if (!inTestimonialBlock && (
        line.includes('.testimonial') || 
        line.includes('.carousel-') || 
        line.includes('.review-btn') || 
        line.includes('.rating') ||
        (line.includes('var(--am-') && line.includes('grad'))
    )) {
        inTestimonialBlock = true;
    }
    
    if (inTestimonialBlock) {
        extracted.push(line);
        if (line.includes('{')) braceCount += (line.match(/{/g) || []).length;
        if (line.includes('}')) braceCount -= (line.match(/}/g) || []).length;
        
        if (braceCount === 0 && line.includes('}')) {
            inTestimonialBlock = false;
        }
    }
}

fs.writeFileSync('public/interior-painting-testimonials.css', extracted.join('\n'));
console.log('Extracted ' + extracted.length + ' lines.');
