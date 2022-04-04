from rest_framework.routers import DefaultRouter
from apps.orders import views
from django.urls import path, include


router = DefaultRouter()
router.register('order', views.OrderAPIViewSet, basename='order')
router.register('create_order', views.OrderCreateAPIViewSet, basename = 'create_order')
router.register('accept_order', views.AcceptOrderAPIView, basename = 'accept_order')
router.register('create_accept_order', views.AcceptOrderCreateAPIView, basename = 'create_saccept_order')


urlpatterns = [
    #order
    path('detail/<int:pk>', views.OrderDetailAPIView.as_view(), name = 'order_detail'),
    path('delete/<int:pk>', views.OrderDeleteAPIView.as_view(), name = 'order_delete_api'),
    path('update/<int:pk>', views.OrderUpdateAPIView.as_view(), name = 'order_update_api'),

]

urlpatterns += router.urls