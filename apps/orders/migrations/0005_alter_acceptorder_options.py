# Generated by Django 3.2.7 on 2022-04-09 12:55

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0004_alter_order_location'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='acceptorder',
            options={'verbose_name': 'Принимать заказ', 'verbose_name_plural': 'Принимать заказы'},
        ),
    ]
