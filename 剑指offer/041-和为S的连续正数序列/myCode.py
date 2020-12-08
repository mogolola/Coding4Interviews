import math 
class Solution:
	def FindContinuousSequence(self, tsum):
		acc = [1]
		re = []
		for i in range(int(tsum/2)+2):
			acc.append(acc[i] + i + 2)
			if acc[i+1] == tsum:
				re.append(list(range(1, i+3)))
		for j in range(0, int(tsum/2)+2):
			k = j+1
			while (acc[k]-acc[j]) <= tsum and k<int(tsum/2)+2:
				tmp = acc[k] - acc[j]
				if tmp==tsum and (k-j)>1:
					re.append(list(range(j+2,k+2)))
				k+=1
		return re

solution = Solution()
print(solution.FindContinuousSequence(100))
			
