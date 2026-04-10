from django.urls import include, path

from .views.fbv import product_list, product_detail
from .views.cbv import ProductListAPIView, ProductDetailAPIView
from .views.mixins import ProductListAPIView, ProductDetailAPIView
from .views.generics import ProductDetailAPIView, ProductListAPIView, CategoryDetailAPIView, CategoryListAPIView, CategoryProductsAPIView

urlpatterns = [
    path('products/fbv/', product_list, name='product-list'),
    path('products/fbv/<int:pk>/', product_detail, name='product-detail'),

    path('products/cbv/', ProductListAPIView.as_view(), name='product-list-cbv'),
    path('products/cbv/<int:pk>/', ProductDetailAPIView.as_view(), name='product-detail-cbv'),

    path('products/mixins/', ProductListAPIView.as_view(), name='product-list-mixins'),
    path('products/mixins/<int:pk>/', ProductDetailAPIView.as_view(), name='product-detail-mixins'),
    
    path('products/generics/', ProductListAPIView.as_view(), name='product-list-generics'),
    path('products/generics/<int:pk>/', ProductDetailAPIView.as_view(), name='product-detail-generics'),
    path('categories/generics/', CategoryListAPIView.as_view(), name='category-list-generics'),
    path('categories/generics/<int:pk>/', CategoryDetailAPIView.as_view(), name='category-detail-generics'),
    path('categories/<int:category_id>/products/', CategoryProductsAPIView.as_view(), name='category-products-generics'),
]