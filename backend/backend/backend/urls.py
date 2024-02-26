from django.views.decorators.csrf import csrf_exempt
from graphene_django.views import GraphQLView
from django.urls import path
from django.contrib import admin
# dil aligilama icin
from django.conf.urls.i18n import i18n_patterns

urlpatterns = i18n_patterns(
    path("graphql", csrf_exempt(GraphQLView.as_view(graphiql=True))),
    path("admin/", admin.site.urls),
    prefix_default_language=False
)
