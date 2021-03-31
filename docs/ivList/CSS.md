# CSS相关

## 盒模型

**盒模型**由以下属性组成，由外到内用公式表示就是：**box = margin + border + padding + content**。除了content(不是属性，作为盒模型扩展理解使用)，其余属性都包含left、right、top和bottom等扩展属性。

- **margin**：边距，外部透明区域，负责隔离相邻盒子
- **border**：边框，内部着色区域，负责隔离边距和填充，包含`width`、`style`、`color`三个扩展属性
- **padding**：填充，内部着色区域，负责扩展盒子内部尺寸
- **content**：内容，以`文本`或`节点`存在的占用位置

标准盒子模型：content-box

 <img :src="$withBase('/img/content-box.png')" alt="content-box"/>

IE盒子模型：border-box

<img :src="$withBase('/img/border-box.png')" alt="border-box"/>

区别：从图中我们可以看出，这两种盒子模型最主要的区别就是width的包含范围，在标准的盒子模型中，width指content部分的宽度，在IE盒子模型中，width表示content+padding+border这三个部分的宽度，故这使得在计算整个盒子的宽度时存在着差异：

标准盒子模型的盒子宽度：左右border+左右padding+width
IE盒子模型的盒子宽度：width

在CSS3中引入了box-sizing属性，box-sizing:content-box;表示标准的盒子模型，box-sizing:border-box表示的是IE盒子模型

最后，前面我们还提到了，box-sizing:padding-box,这个属性值的宽度包含了左右padding+width

也很好理解性记忆，包含什么，width就从什么开始算起。