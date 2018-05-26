# Graph

Definition: A set of vertices connected pairwise by edges.

## Terminology

Path: A sequence of vertices connected by edges.

Cycle: Path whose first and last vertices are the same.

Two vertices are connected if there is a path between them.

## Graph-Processing Problems

Path: Is there a path between `s` and `t`?

Shortest path: What is the shortest path between `s` and `t`?

Cycle: Is there a cycle in the graph?

## API

```java
                  Graph(int V)          // create an empty graph with V vertices
             void addEdge(int v, int w) // add an edge v-w
Iterable<Integer> adj(int v)            // vertices adjacent to v
              int V()                   // number of vertices
              int E()                   // number of edges
           String toString()            // string representation
```

## Graph-Processing Code Examples

```java
/*
 * compute the degree of v
 * degree of v is the number of vertices that are connected by an edge to v
 */
 public static int degree(Graph G, int v)
 {
   int degree = 0;
   for (int w: G.adj(v)) degree++;
   return degree;
 }
```

```java
/* compute maximum degree */
public static int maxDegree(Graph G)
{
  int max = 0;
  for (int v = 0; v < G.V(); v++)
    if (degree(G, V) > max)
      max = degree(G, V);
  return max;
}
```

## Adjacency-List Graph Representation
* Most widely used implementation.
* Maintain vertex-indexed array of lists.
* For every vertex, maintain a list of vertices that are adjacent to that vertex.
* Can use a Bag (Abstract Data Type) to hold the adjacent vertices.

## Graph Representations
**In Practice**:
* Use adjacency-lists representation.
* Most graph algorithms based on interating over vertices adjacent to `v`.
* Real-world graphs tend to be `sparse`.
    - Huge number of vertices.
    - Small average vertex degree.

**order of growth of running time of graph operations by representation**

| representation      | space           | add edge | edge between v and w? | iterate over vertices adjacent to v? |
| :-----------------: | :-------------: | :------: | :-------------------: | :----------------------------------: |
|  list of edges      |   E             |   1      |   E                   |   E                                  |
|  adjacency matrix   |   V<sup>2</sup> |   1*     |   1                   |   V                                  |
|  adjacency lists    |   E + V         |   1      |   degree(v)           |   degree(v)                          |

`*` - disallows parallel edges