# SpringBoot

配置包

web包需要放在com.example.demo中，然后创建com.user.web包？

测试后，不关类名的事情

就是扫描example后的包，跟Application同级目录的包

**@SpringBootApplication**

该注解是一下三个注解的缩写：

- Configuration：指出这是一个Spring应用程序上下文配置文件
- EnableAutoConfiguration：启用自动配置
- ComponentScan

**@RestController**

该注解是组合注解代替了

- Controller
- RequestBody

**@ImportResource**

导入其他xml的配置文件，用classpath的json格式传入Value数组中

```jsx
**@ImportResource（value={”classpath:applicaton.xml”}**
```

**@PropertySource**

读取properties属性配置文件，用了这个就可以使用${}来读取propertie文件的键值对了

```jsx
写了一个Properties文件后
我们可以用
@Value（${tiger.name}"}
```

[多环境配置文件](https://www.notion.so/5138fcd701494b80a9553685586e01f2)

[自动配置](https://www.notion.so/c343598c549146daaf299dc3ef8f5b12)

[使用JSP](https://www.notion.so/JSP-8def52c81e74498b962c7c5727cca330)

[容器创建好后执行操作的接口](https://www.notion.so/176b5321bf954b02806fd1e47b81ded4)

[拦截器](https://www.notion.so/a66db1d4c2754405b3a2d9f9245f4e63)

[devtools加载](https://www.notion.so/devtools-20a0555c4c7a4219abe87ad7d006ce9e)

[集成mybatis](https://www.notion.so/mybatis-54ec67976b864486b5c3c49c123adb3b)

[缓存](https://www.notion.so/6cf5b44167e841c1a23177afb14d7add)

[thymeleaf](https://www.notion.so/thymeleaf-1ea4b71925324430ada6498f5e0b2c00)

[异常处理](https://www.notion.so/4fabb8d1336f4ab3972acc5d90458046)

[Swagger](https://www.notion.so/Swagger-5798de017ec342f29c5e77282129a3ab)