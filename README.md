1) Установка проекта

1-а) Что бы установить мой проект через git к себе нужно воспользоваться командой - git clone
1-а).1 - cd /путь/к/желаемой/папке
1-а).2 - git clone https://github.com/Mukash-Erasyl/bvcfwhxvknsharxkusbr.git


1-b) Что бы установить в целом проект Ionic(разработать самому) к себе на компьютер необходимо сделать ряд действий. 
1-b).1 - Установите Node.js и npm: : brew install node или можете скачать Node.js с официального сайта: https://nodejs.org/.(моя версия v21.1.0) 
1-b).2 - Установите Ionic CLI: npm install -g @ionic/cli
1-b).3.1 - Установите Android Studio и Android SDK(Заходите на официальный сайт Android Studio и следуйте инструкциям для установки.)
1-b).3.2 - Установите Xcode (для разработки под iOS): - есть в App Store
1-b).4 - Создайте новый проект Ionic - ionic start название_проекта blank --type=angular
1-b).5 - Перейдите в папку проекта - cd название_проекта
1-b).6 - Добавьте платформы - npx cap add android | npx cap add ios

2) capacitor-community/contacts
   
2.1 Запускаем проект на нашем железе ionic serve(Если вы хотите запустить в браузере) | ionic capacitor run ios --livereload --external(на xcode и браузер) | ionic capacitor run android --livereload --external(Android studio и браузере)
2.2 Ждем запуска сервера (или AS , xcode) - node js(моя версия v21.1.0) и после запуска сервера заходим в [localhost](http://localhost:8100)http://localhost:8100 и видим шаблон blank
2.3  Загружаем к себе capacitor-community/contacts - командой npm i @capacitor-community/contacts(загружает до актуальной версий)
2.4 Затем собираем проект ionic build 
2.5 И делаем синхрон npx cap sync
2.6 Добавляем плагины для платформ в моем случае я собирал и на android и ios  - ionic cap add android (ionic cap add ios )
2.7 Меняем настройки ios:AndroidManifest
<uses-permission android:name="android.permission.READ_CONTACTS" />
<uses-permission android:name="android.permission.WRITE_CONTACTS" />
2.8 ios : info.plist

NSContactsUsageDescription

2.9 - Добавляем необходимый функционал через документацию https://capacitor-community.github.io/contacts/#/api 


3) QR - генератор
3.1 - для того что бы мы могли работать с qr в проекте загружаем angularx-qrcode командой - npm i angularx-qrcode
3.2 - проверяем свою версию angular перед скачиванием инсталяцией - ng version
3.1 - если последняя версия как у меня ( 16.2.10) делаем инсталяцию последней версии пакета AngularX-QRCode - npm install angularx-qrcode --save
3.3 - Если нам необходимо самим сгенерировать QR код реализуем функционал по API - https://github.com/cordobo/angularx-qrcode

4) QR - сканнер
4.1 - для добавления функционала сканировки с помощью камеры устройства необходиме установить - npm install @capacitor-community/barcode-scanner
4.2 - Если необходимо установить платформы android - установить - ionic cap add , а затем сделать синхрон - npx cap sync 
4.3 - Добавить необходимые конфигурации : android -
   Меняем настройки ios:AndroidManifest
<?xml version="1.0" encoding="utf-8"?>
<manifest
  xmlns:android="http://schemas.android.com/apk/res/android"
+  xmlns:tools="http://schemas.android.com/tools"
  package="com.example">

  <application
+    android:hardwareAccelerated="true"
  >
  </application>

+  <uses-permission android:name="android.permission.CAMERA" />

+  <uses-sdk tools:overrideLibrary="com.google.zxing.client.android" />
</manifest>

4.4 Добавить необходимые конфигурации : ios -
info.plist
+  <key>NSCameraUsageDescription</key>
+  <string>To be able to scan barcodes</string>
4.5 - Добавить необходимый функционал API - https://github.com/capacitor-community/barcode-scanner(Не стал расписывать каждую функцию и давать им описания)


5) Собрать проект в apk или aab
5.1 - Настройка окружения:
Убедитесь, что на вашем компьютере установлены Node.js, npm, Ionic CLI, Capacitor и Android Studio.
5.2 - Добавление платформы Android:
Если вы еще не добавили платформу Android, выполните следующую команду в корневой папке вашего проекта: - npx cap add android
5.3 - Создание сборки:
Перейдите в папку сборки для Android внутри папки Capacitor, используя команду cd.
Для создания AAB выполните следующую команду: ./gradlew bundleRelease
5.4 Подписание AAB-файла:
Для подписания AAB-файла, вам нужно использовать ключ и keystore. Если у вас их нет, создайте ключ и keystore с помощью keytool (инструмента Java Development Kit - JDK).
Затем используйте команду bundletool для подписания AAB-файла. Пример:bundletool sign-bundle --ks=/path/to/your/keystore.keystore --ks-pass=pass:<keystore_password> --ks-key-alias=<alias_name> --key-pass=pass:<key_password> --bundle=app-release.aab --output=app-release-signed.aab
5.5 Готово: Дальше я сам легко конвертировал с помощью приложения - AAB installer 













