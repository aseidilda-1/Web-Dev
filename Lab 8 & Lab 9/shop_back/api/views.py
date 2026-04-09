from rest_framework.response import Response
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.filters import SearchFilter, OrderingFilter

from .models import *
from .serializers import *

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    filter_backends = [SearchFilter, OrderingFilter]
    search_fields = ['name']
    ordering_fields = ['name', 'price']
    ordering = ['name']

    def get_queryset(self):
        queryset = Product.objects.all()

        category = self.request.query_params.get('category')
        active = self.request.query_params.get('is_active')

        if category:
            queryset = queryset.filter(category__id=category)
        if active is not None:
            if active.lower() == 'true':
                queryset = queryset.filter(is_active=True)
            elif active.lower() == 'false':
                queryset = queryset.filter(is_active=False)

        return queryset

    @action(detail=False, methods=['get'])
    def active(self, request):
        queryset = self.get_queryset().filter(is_active=True)

        for backend in self.filter_backends:
            queryset = backend().filter_queryset(request, queryset, self)

        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    @action(detail=True, methods=['get'])
    def products(self, request, pk=None):
        if pk is not None:
            category = Category.objects.get(pk=pk)
            products = Product.objects.filter(category=category)
            serializer = ProductSerializer(products, many=True)
            return Response(serializer.data)