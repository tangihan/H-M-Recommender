from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status as httpStatus
from py2neo import Graph

@api_view(['POST'])
def product_recommendation(request):
    try:
        productName = request.data['productName']
        username = request.data['neo4j-username']
        password = request.data['neo4j-password']
        graph = Graph(f"bolt://18.215.134.7:7687", auth=(username, password))
        data = graph.run(
            f"""MATCH (p1:Product)<-[:HAS_NAME]-(:Article)-[:PURCHASED]-(c:Customer)-[pur:PURCHASED]-(a:Article)-[:HAS_NAME]-(p:Product)
                WHERE p1.productName = '{productName}'
                RETURN p.productName as productName, a.articleId as articleId, a.maxPrice as price, count(pur) as count
                ORDER BY count DESC
                LIMIT 10;""").data()
        
    except Exception as e:
        return Response(f"Invalid request. {e}", status=httpStatus.HTTP_400_BAD_REQUEST)
    
    return Response(data,status=httpStatus.HTTP_200_OK)

@api_view(['POST'])
def property_recommendation(request):
    try:
        garmentGroupName = request.data['garmentGroupName']
        indexName = request.data['indexName']
        username = request.data['neo4j-username']
        password = request.data['neo4j-password']
        graph = Graph(f"bolt://18.215.134.7:7687", auth=(username, password))
        data = graph.run(
            f"""
                MATCH (p:Product) WITH p
                MATCH (p)-[:IN_DEPARTMENT]->(d:Department) WITH p,d
                MATCH (p)-[:IN_GROUP]->(g:Garment) WITH p,g,d
                MATCH (p)-[:PART_OF]->(ig:IndexGroup) WITH p,g,ig,d
                MATCH (p)-[:HAS_INDEX]->(i:Index) WITH p,g,i,ig,d
                MATCH (p)-[:SUBSET_OF]->(pt:ProductType) WITH p,g,i,ig,d,pt
                WHERE g.garmentGroupName = {garmentGroupName} AND i.indexName = {indexName}
                WITH p
                MATCH (a:Article)-[:HAS_NAME]->(p)
                return a.articleId as articleId, p.productName as productName, a.maxPrice as price
                limit 10
            """).data()
                        
    except Exception as e:
        return Response(f"Invalid request. {e}", status=httpStatus.HTTP_400_BAD_REQUEST)
    
    return Response(data,status=httpStatus.HTTP_200_OK)


@api_view(['POST'])
def season_recommendation(request):
    try:
        seasonName = request.data['seasonName']
        username = request.data['neo4j-username']
        password = request.data['neo4j-password']
        graph = Graph(f"bolt://18.215.134.7:7687", auth=(username, password))
        data = graph.run(
            f"""
            match(a:Article)-[:SOLD_DURING]-(s:Season)
            WHERE s.seasonName = {seasonName}
            match (a)
            with a, size(()-[:PURCHASED]->(a)) as purchaseCount
            order by purchaseCount desc limit 10
            match (a)-[:HAS_NAME]-(p:Product)
            return a.articleId as articleId, p.productName as productName, a.maxPrice
            """).data()
        
    except Exception as e:
        return Response(f"Invalid request. {e}", status=httpStatus.HTTP_400_BAD_REQUEST)
    
    return Response(data,status=httpStatus.HTTP_200_OK)