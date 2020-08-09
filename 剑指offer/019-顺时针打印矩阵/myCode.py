# coding:utf-8

from leetcode_tester import Tester

class Solution:
    def printMatrix(self, matrix):
    	r = []
    	lenX = len(matrix[0])
    	lenY = len(matrix)
    	if lenX==1:
    		for y in range(0,lenY):
    			r.append(matrix[y][0])
    	elif lenY==1:
    		for x in range(0,lenX):
    			r.append(matrix[0][x])
    	else:
    		for x in range(0,lenX-1):
    			r.append(matrix[0][x])
    		for y in range(0,lenY-1):
    			r.append(matrix[y][lenX-1])
    		for x in range(lenX-1,0,-1):
    			r.append(matrix[lenY-1][x])
    		for y in range(lenY-1,0,-1):
    			r.append(matrix[y][0])
    		if lenX-2>0 and lenY-2>0:
    			left = list(map(lambda arr:arr[1:-1], matrix[1:-1]))
    			return r+self.printMatrix(left)
    	return r
    	
    	


solution = Solution()
tester = Tester(solution.printMatrix)
tester.addTest([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]], [1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10])
tester.addTest([[1]],[1])
tester.doTest()
