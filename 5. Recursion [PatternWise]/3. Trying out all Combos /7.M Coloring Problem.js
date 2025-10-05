// gfg -> https://www.geeksforgeeks.org/problems/m-coloring-problem-1587115620/1

// Given an integer M and an undirected graph with N vertices and E edges. The goal is to determine whether the graph can be coloured with a maximum of M colors so that no two of its adjacent vertices have the same colour applied to them.

// In this context, colouring a graph refers to giving each vertex a different colour. If the colouring of vertices is possible then return true, otherwise return false.


// Examples:
// Input : N = 4 , M = 3 , E = 5 , Edges = [ (0, 1) , (1, 2) , (2, 3) , (3, 0) , (0, 2) ]

// Output : true

// Explanation : Consider the three colors to be red, green, blue.

// We can color the vertex 0 with red, vertex 1 with blue, vertex 2 with green, vertex 3 with blue.

// In this way we can color graph using 3 colors at most.


// User function Template for javascript


class Solution {
    graphColoring(v, edges, m) {
        const col = new Array(v).fill(0);
        return this.recursion(v, edges, m, 0, col);
    }
    
    recursion(v, edges, m, idx, col) {
        if (idx === v) return true;
        
        for(let c=1; c<= m; c++){
            if (this.isSafe(idx, c, edges, col)) {
                col[idx] = c;
                if (this.recursion(v, edges, m, idx + 1, col)) return true;
                col[idx] = 0;
            }
        }
    }
    
    isSafe(vertex, color, edges, col) {
        for (const e of edges) {
            const u = e[0]
            const v = e[1]
            if (u === vertex && col[v] === color) return false;
            if (v === vertex && col[u] === color) return false;
        }
        return true;
    }
}

