#include<stdio.h>
#include <stdbool.h>
#include<string.h>
char str[100];
int top = -1;
char pop(){
    char c = str[top];
    top--;
    return c;
}
void push(char c){
    top++;
    str[top] = c;
}
bool isValid(char* s) {
    bool state = false;
    for(int i =0;i<strlen(s);i++){
        if(s[i] == '(' || s[i] == '{' || s[i] == '['){
            push(s[i]);
        }
        else if (s[i] == ')'){
            if(top!=-1){
                if(pop() == '('){
                state = true;
                }
                else{
                    return false;
                }
            }
            
        }
        else if (s[i] == '}'){
            if(top!=-1){
                if(pop() == '{'){
                state = true;
                }
                else{
                    return false;
                }
            }
            
        }
        else if ( s[i] == ']'){
            if(top!=-1){
                if(pop() == '['){
                state = true;
                }
                else{
                    return false;
                }
            }  
        }
    }
    return state;
}

void main (){
    char str1[20] = "((";
    if(isValid(str1)){
        printf("Yes");
    }
    else{
        printf("No");
    }
}