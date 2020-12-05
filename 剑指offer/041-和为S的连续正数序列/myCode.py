import math
class Solution:
	def FindContinuousSequence(self, tsum):
		upperBound = int(tsum/2)+2
		lowerBound = 0
		result = []
		regis = []
		while(lowerBound < upperBound):
			regis.append([])
			for i in range(lowerBound, upperBound):
				if i == lowerBound:
					regis[lowerBound].append(i)
				else:
					regis[lowerBound].append(regis[lowerBound][-1] + i)
				if regis[lowerBound][-1] == tsum:
					if i - max(lowerBound,1)>=1:
						result.append(list(range(max(lowerBound,1), i+1)))
				elif regis[lowerBound][-1] > tsum:
					break
			lowerBound+=1
		return result

solution = Solution()
print(solution.FindContinuousSequence(3))
			
