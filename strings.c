#include <stdio.h>
int main() {
	//code
	int i;
	char string[3];
	for(i=0;i<3;i++){
	    scanf("%s",&string[i]);
	}
	for(i=0;i<3;i++){
	    printf("%s",string[i]);
	}
	return 0;
}