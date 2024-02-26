from django.contrib import admin
from .models import *
from django.utils.translation import gettext_lazy as _

# Register your models here.


class UserAdmin(admin.ModelAdmin):
    list_display = ('username', 'first_name',
                    'last_name', 'email', 'date_joined')


class CategoryAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug': ('name',)}


class TagAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug': ('name',)}


class PostAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug': ('title',)}
    list_display = ('title', 'is_published', 'is_featured', 'created_at')


class CommentAdmin(admin.ModelAdmin):
    list_display = ('__str__', 'is_approved', 'created_at')


admin.site.register(Site)
admin.site.register(User, UserAdmin)
admin.site.register(Category, CategoryAdmin)
admin.site.register(Tag, TagAdmin)
admin.site.register(Post, PostAdmin)
admin.site.register(Comment, CommentAdmin)


admin.site.index_title = _('Django + Vue')
admin.site.site_header = _('Django + Vue Blog App Administration')
admin.site.site_title = _('My Site Management')
