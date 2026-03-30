from django.http import JsonResponse
from .models import Product, Category


def product_list(request):
    products = Product.objects.all()
    categoty_id = request.GET.get('category')
    active = request.GET.get('active')
    search = request.GET.get('search')

    if categoty_id:
        products = products.filter(category=categoty_id)
    if active is not None:
        products = products.filter(is_active=active.lower() == 'true')
    if search:
        products = products.filter(name__icontains=search)

    data = []
    for product in products:
        data.append({
            'id': product.id,
            'name': product.name,
            'price': product.price,
            'description': product.description,
            'count': product.count,
            'is_active': product.is_active,
            'category': product.category.id,
        })

    return JsonResponse(data, safe=False)

def categories_list(request):
    categories = Category.objects.all()

    data = []
    for category in categories:
        data.append({
            'id': category.id,
            'name': category.name,
        })

    return JsonResponse(data, safe=False)

def product_detail(request, id):
    try:
        product = Product.objects.get(id=id)

        data = {
            'id': product.id,
            'name': product.name,
            'price': product.price,
            'description': product.description,
            'count': product.count,
            'is_active': product.is_active,
            'category': product.category.id,
        }

        return JsonResponse(data)
    except Product.DoesNotExist:
        return JsonResponse({'error': 'Product not found'}, status=404)
    
def category_detail(request, id):
    try:
        category = Category.objects.get(id=id)

        data = {
            'id' : category.id,
            'name' : category.name
        }

        return JsonResponse(data)
    except Category.DoesNotExist:
        return JsonResponse({'error': 'Category not found'}, status=404)
    
def category_products(request, id):
    try:
        category = Category.objects.get(id=id)
        products = Product.objects.filter(category=category)

        data = []
        for product in products:
            data.append({
                'id': product.id,
                'name': product.name,
                'price': product.price,
                'description': product.description,
                'count': product.count,
            'is_active': product.is_active,
            'category': product.category.id,
            })

        return JsonResponse(data, safe=False)
    except Category.DoesNotExist:
        return JsonResponse({'error': 'Products of this category not found'}, status=404)