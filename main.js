/* eslint-env node */
main(){
    var clickObj = document.getElementById('click');
    clickObj.onClick = function(){
        if (this.style.backgroundColor){
            this.style.backgroundColor = '';
        } else{
            this.style.backgroundColor = 'red';
        }
    }
    
    d3.selectAll('.hover-me')
       .on('mouseover', function(){
           this.style.backgroundColor = 'blue';
       })
       .on('mouseleave', function(){
           this.styel.backgroundColor = '';
       })
}